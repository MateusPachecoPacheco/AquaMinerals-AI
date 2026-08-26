import type { FastifyInstance, FastifyError } from "fastify";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { env, isDevelopment } from "@config/env.js"; // <-- Importação corrigida
import { AppError } from "@shared/errors/AppError.js";

export async function registerErrorHandler(app: FastifyInstance): Promise<void> {
  app.setErrorHandler((error: FastifyError | AppError | PrismaClientKnownRequestError | Error, request, reply) => {
    // 1. Erros de Negócio (AppError)
    if (error instanceof AppError) {
      app.log.warn({ err: error, url: request.url }, "Erro de negócio");
      return reply.status(error.statusCode).send({
        statusCode: error.statusCode,
        error: error.name,
        message: error.message,
      });
    }

    // 2. Erros de Validação (Zod/Fastify Schema)
    if ((error as FastifyError).validation) {
      app.log.warn({ err: error, url: request.url }, "Erro de validação");
      return reply.status(400).send({
        statusCode: 400,
        error: "Bad Request",
        message: "Erro de validação nos dados enviados.",
        details: (error as FastifyError).validation,
      });
    }

    // 3. Erros conhecidos do Prisma
    if (error instanceof PrismaClientKnownRequestError) {
      app.log.error({ err: error, url: request.url }, "Erro do Prisma");
      
      if (error.code === "P2002") {
        return reply.status(409).send({
          statusCode: 409,
          error: "Conflict",
          message: "Já existe um registro com estes dados únicos no banco.",
        });
      }
      if (error.code === "P2025") {
        return reply.status(404).send({
          statusCode: 404,
          error: "Not Found",
          message: "O registro solicitado não foi encontrado.",
        });
      }
      
      return reply.status(500).send({
        statusCode: 500,
        error: "Internal Server Error",
        message: "Ocorreu um erro no banco de dados.",
      });
    }

    // 4. Erros genéricos / Inesperados
    app.log.error({ err: error, url: request.url }, "Erro inesperado");
    
    const statusCode = (error as any).statusCode || 500;
    // Em produção, não vaza a mensagem de erro original para evitar expor detalhes do sistema
    const message = isDevelopment ? error.message : "Ocorreu um erro interno no servidor."; // <-- Uso corrigido

    return reply.status(statusCode).send({
      statusCode,
      error: (error as any).name || "Internal Server Error",
      message,
    });
  });

  // Handler para Rotas Não Encontradas (404)
  app.setNotFoundHandler((request, reply) => {
    reply.status(404).send({
      statusCode: 404,
      error: "Not Found",
      message: `Rota ${request.method} ${request.url} não encontrada.`,
    });
  });
}
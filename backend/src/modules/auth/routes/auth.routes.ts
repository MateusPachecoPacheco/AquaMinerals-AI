import type { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/AuthController.js";

export async function authRoutes(app: FastifyInstance): Promise<void> {
  const authController = new AuthController();

  app.post(
    "/register",
    {
      schema: {
        tags: ["Autenticação"],
        summary: "Cadastrar novo usuário na plataforma",
        body: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string", minLength: 3 },
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 6 },
          },
        },
        response: {
          201: {
            description: "Usuário criado com sucesso",
            type: "object",
            properties: {
              id: { type: "string", format: "uuid" },
              name: { type: "string" },
              email: { type: "string" },
              role: { type: "string", enum: ["ADMIN", "MODERATOR", "USER"] },
              createdAt: { type: "string", format: "date-time" },
            },
          },
        },
      },
    },
    authController.register
  );

  app.post(
    "/login",
    {
      schema: {
        tags: ["Autenticação"],
        summary: "Autenticar usuário e obter tokens JWT",
        body: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", format: "email" },
            password: { type: "string" },
          },
        },
      },
    },
    authController.login
  );
}
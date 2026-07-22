import type { FastifyInstance } from "fastify";
import { execSync } from "child_process";

export async function adminRoutes(app: FastifyInstance): Promise<void> {
  // Endpoint para rodar seed manualmente (útil para primeira configuração)
  app.post("/seed", {
    schema: {
      tags: ["Admin"],
      summary: "Popular banco de dados com dados iniciais (apenas primeira vez)",
    },
    handler: async (request, reply) => {
      try {
        app.log.info("🌱 Iniciando seed do banco de dados...");
        
        execSync("npx prisma db seed", {
          stdio: "inherit",
          env: { ...process.env },
        });
        
        app.log.info("✅ Seed executado com sucesso!");
        
        return reply.status(200).send({
          success: true,
          message: "Seed executado com sucesso!",
          timestamp: new Date().toISOString(),
        });
      } catch (error: any) {
        app.log.error(error, "❌ Erro ao executar seed");
        return reply.status(500).send({
          success: false,
          message: "Erro ao executar seed",
          error: error.message,
        });
      }
    },
  });

  // Endpoint para verificar status do banco
  app.get("/db-status", {
    schema: {
      tags: ["Admin"],
      summary: "Verificar status das migrations e tabelas",
    },
    handler: async () => {
      try {
        const result = execSync("npx prisma migrate status", {
          encoding: "utf-8",
        });
        return { status: "ok", migrations: result };
      } catch (error: any) {
        return { status: "error", message: error.message };
      }
    },
  });
}
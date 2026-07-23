import type { FastifyInstance } from "fastify";
import { SeedService } from "../services/SeedService.js";

export async function adminRoutes(app: FastifyInstance): Promise<void> {
  app.post("/seed", {
    schema: {
      tags: ["Admin"],
      summary: "Popular banco de dados com dados iniciais (apenas primeira vez)",
    },
    handler: async (_request, reply) => {
      try {
        app.log.info("🌱 Iniciando seed do banco de dados...");

        const seedService = new SeedService();
        const result = await seedService.execute();

        if (result.success) {
          app.log.info("✅ Seed executado com sucesso!");
          return reply.status(200).send(result);
        } else {
          app.log.error("❌ Erro ao executar seed");
          return reply.status(500).send(result);
        }
      } catch (error: any) {
        app.log.error(error, "❌ Erro inesperado ao executar seed");
        return reply.status(500).send({
          success: false,
          message: "Erro inesperado ao executar seed",
          error: error.message,
        });
      }
    },
  });
}
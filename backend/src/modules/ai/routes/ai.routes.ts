import type { FastifyInstance } from "fastify";
import { AiController } from "../controllers/AiController.js";
import { verifyJwt } from "@shared/middlewares/verifyJwt.js";

export async function aiRoutes(app: FastifyInstance): Promise<void> {
  const aiController = new AiController();

  // A IA só pode ser acessada por usuários autenticados
  app.addHook("preHandler", verifyJwt);

  app.post("/chat", {
    schema: {
      tags: ["AquaAI"],
      summary: "Enviar mensagem para a Inteligência Artificial da plataforma",
      security: [{ bearerAuth: [] }],
      body: {
        type: "object",
        required: ["message"],
        properties: {
          message: { type: "string", maxLength: 1000 },
          context: { type: "string" },
        },
      },
    },
  }, aiController.chat);
}
import type { FastifyInstance } from "fastify";
import { CommunityController } from "../controllers/CommunityController.js";
import { verifyJwt } from "@shared/middlewares/verifyJwt.js";
import { verifyUserRole } from "@shared/middlewares/verifyUserRole.js";
import { UserRole } from "@prisma/client";

// A palavra 'export' aqui é OBRIGATÓRIA para o app.ts conseguir enxergar
export async function communityRoutes(app: FastifyInstance): Promise<void> {
  const communityController = new CommunityController();

  // Todas as rotas abaixo exigem autenticação
  app.addHook("preHandler", verifyJwt);

  app.post("/reports", {
    schema: {
      tags: ["Comunidade"],
      summary: "Criar uma nova denúncia ambiental ou sugestão",
      security: [{ bearerAuth: [] }],
    },
  }, communityController.createReport);

  app.get("/reports", {
    schema: {
      tags: ["Comunidade"],
      summary: "Listar denúncias e sugestões (com filtros opcionais)",
      security: [{ bearerAuth: [] }],
    },
  }, communityController.listReports);

  // Rota exclusiva para Moderadores e Admins atualizarem o status
  app.patch("/reports/:id/status", {
    preHandler: [verifyUserRole(UserRole.ADMIN, UserRole.MODERATOR)],
    schema: {
      tags: ["Comunidade"],
      summary: "Atualizar status de uma denúncia (Apenas Admins/Moderadores)",
      security: [{ bearerAuth: [] }],
    },
  }, communityController.updateStatus);
}
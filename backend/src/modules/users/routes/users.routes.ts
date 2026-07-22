import type { FastifyInstance } from "fastify";
import { UsersController } from "../controllers/UsersController.js";
import { verifyJwt } from "@shared/middlewares/verifyJwt.js";
import { verifyUserRole } from "@shared/middlewares/verifyUserRole.js";
import { UserRole } from "@prisma/client";

export async function usersRoutes(app: FastifyInstance): Promise<void> {
  const usersController = new UsersController();

  // Aplica o JWT em todas as rotas abaixo deste hook
  app.addHook("preHandler", verifyJwt);

  app.get("/me", {
    schema: {
      tags: ["Usuários"],
      summary: "Obter perfil do usuário autenticado",
      security: [{ bearerAuth: [] }],
    },
  }, usersController.me);

  app.put("/me", {
    schema: {
      tags: ["Usuários"],
      summary: "Atualizar perfil do usuário autenticado",
      security: [{ bearerAuth: [] }],
      body: {
        type: "object",
        properties: {
          name: { type: "string", minLength: 3 },
          email: { type: "string", format: "email" },
          password: { type: "string", minLength: 6 },
        },
      },
    },
  }, usersController.update);

  // Rota Administrativa (Exige JWT + Role ADMIN)
  app.get("/", {
    preHandler: [verifyUserRole(UserRole.ADMIN)],
    schema: {
      tags: ["Usuários"],
      summary: "Listar todos os usuários (Apenas Admins)",
      security: [{ bearerAuth: [] }],
    },
  }, usersController.list);
}
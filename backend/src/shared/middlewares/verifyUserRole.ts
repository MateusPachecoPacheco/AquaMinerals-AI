import type { FastifyRequest, FastifyReply } from "fastify";
import { AppError } from "@shared/errors/AppError.js";
import { UserRole } from "@prisma/client";

export function verifyUserRole(...roles: UserRole[]) {
  return async (request: FastifyRequest, _reply: FastifyReply) => {
    if (!request.user) {
      throw new AppError("Usuário não autenticado.", 401);
    }
    
    if (!roles.includes(request.user.role as UserRole)) {
      throw new AppError("Você não tem permissão para acessar esta rota.", 403);
    }
  };
}
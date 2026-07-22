import type { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import { env } from "@config/env.js";
import { AppError } from "@shared/errors/AppError.js";

export async function verifyJwt(request: FastifyRequest, _reply: FastifyReply) {
    try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError("Token não fornecido.", 401);
    }

    // O formato é "Bearer <token>"
    const [, token] = authHeader.split(" ");

    const payload = jwt.verify(token, env.JWT_SECRET) as jwt.JwtPayload;

    // Injeta os dados do usuário logado no request para uso nos Controllers
    request.user = {
      sub: payload.sub as string,
      role: payload.role as string,
    };
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new AppError("Token inválido ou expirado.", 401);
    }
    throw error;
  }
}
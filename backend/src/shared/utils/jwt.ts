import jwt from "jsonwebtoken";
import { env } from "@config/env.js";

export function signAccessToken(payload: string | object | Buffer): string {
  return jwt.sign(payload, env.JWT_SECRET, { 
    // O 'as any' é necessário aqui devido a uma limitação de tipagem estrita do @types/jsonwebtoken v9
    expiresIn: env.JWT_EXPIRES_IN as any, 
  });
}

export function signRefreshToken(payload: string | object | Buffer): string {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, { 
    expiresIn: env.JWT_REFRESH_EXPIRES_IN as any,
  });
}
import type { FastifyInstance } from "fastify";
import fastifyHelmet from "@fastify/helmet";
import fastifyRateLimit from "@fastify/rate-limit";
import { isDevelopment } from "@config/env.js"; // Removido o 'env' que não estava sendo usado
 // <-- Importação corrigida

export async function registerSecurity(app: FastifyInstance): Promise<void> {
  // Helmet: Protege contra vulnerabilidades comuns (XSS, Clickjacking, etc.)
  await app.register(fastifyHelmet, {
    contentSecurityPolicy: false, // Desabilitado para não conflitar com o Swagger UI
  });

  // Rate Limit: Protege contra força bruta e DDoS
  await app.register(fastifyRateLimit, {
    max: isDevelopment ? 1000 : 100, // <-- Uso corrigido
    timeWindow: "1 minute",
  });
}
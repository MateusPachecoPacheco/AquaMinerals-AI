import type { FastifyInstance, FastifyServerOptions } from "fastify";
import Fastify from "fastify";
import fastifyCors from "@fastify/cors";

import { env, isDevelopment } from "@config/env.js";
import { checkDatabaseConnection, connectDatabase } from "@database/prisma.js";
import { registerSwagger } from "@plugins/swagger.js";
import { registerErrorHandler } from "@plugins/error-handler.js";
import { registerSecurity } from "@plugins/security.js";

// ✅ IMPORTS DE ROTAS - cada um aparece APENAS UMA VEZ
import { authRoutes } from "@modules/auth/routes/auth.routes.js";
import { usersRoutes } from "@modules/users/routes/users.routes.js";
import { dashboardRoutes } from "@modules/dashboard/routes/dashboard.routes.js";
import { mapRoutes } from "@modules/map/routes/map.routes.js";
import { communityRoutes } from "@modules/community/routes/community.routes.js";
import { newsletterRoutes } from "@modules/community/routes/newsletter.routes.js";
import { aiRoutes } from "@modules/ai/routes/ai.routes.js";

export async function buildApp(options: FastifyServerOptions = {}): Promise<FastifyInstance> {
  const app = Fastify({
    // ✅ CRÍTICO PARA PRODUÇÃO: trustProxy habilitado
    trustProxy: true,
    logger: {
      level: env.LOG_LEVEL,
      transport: isDevelopment
        ? {
            target: "pino-pretty",
            options: {
              colorize: true,
              translateTime: "HH:MM:ss",
              ignore: "pid,hostname",
            },
          }
        : undefined,
    },
    ...options,
  });

  // 1. Segurança e CORS
  await registerSecurity(app);
  
  // ✅ CORS mais flexível para debug
  const corsOrigins = env.CORS_ORIGIN.split(",").map((origin) => origin.trim());
  app.log.info({ corsOrigins }, "CORS configurado para as origens");
  
  await app.register(fastifyCors, {
    origin: (origin, callback) => {
      // Permite requisições sem origin (ex: Postman, mobile apps)
      if (!origin) {
        return callback(null, true);
      }
      
      // Verifica se a origem está na lista permitida
      if (corsOrigins.includes(origin)) {
        return callback(null, true);
      }
      
      // Em desenvolvimento, permite qualquer localhost
      if (isDevelopment && (origin.includes("localhost") || origin.includes("127.0.0.1"))) {
        return callback(null, true);
      }
      
      // Log de CORS bloqueado para debug
      app.log.warn({ origin, corsOrigins }, "CORS bloqueado para origem");
      callback(new Error("Not allowed by CORS"), false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  });

  // 2. Documentação e Tratamento de Erros
  await registerSwagger(app);
  await registerErrorHandler(app);

  // 3. Health Check (Infraestrutura)
  app.get("/health", {
    schema: {
      tags: ["Infraestrutura"],
      summary: "Health check da aplicação",
      description:
        "Endpoint de infraestrutura para verificar status do servidor e conexão com o banco.",
      response: {
        200: {
          type: "object",
          properties: {
            status: { type: "string" },
            app: { type: "string" },
            version: { type: "string" },
            environment: { type: "string" },
            database: { type: "string" },
            timestamp: { type: "string" },
          },
        },
      },
    },
    handler: async () => {
      const databaseConnected = await checkDatabaseConnection();

      return {
        status: "ok",
        app: env.APP_NAME,
        version: env.APP_VERSION,
        environment: env.NODE_ENV,
        database: databaseConnected ? "connected" : "disconnected",
        timestamp: new Date().toISOString(),
      };
    },
  });

  // 4. Encapsulamento da API (Versionamento e Módulos de Negócio)
  await app.register(async function (api) {
    await api.register(authRoutes, { prefix: "/auth" });
    await api.register(usersRoutes, { prefix: "/users" });
    await api.register(dashboardRoutes, { prefix: "/dashboard" });
    await api.register(mapRoutes, { prefix: "/map" });
    await api.register(communityRoutes, { prefix: "/community" });
    await api.register(newsletterRoutes, { prefix: "/community/newsletter" });
    await api.register(aiRoutes, { prefix: "/ai" });
  }, { prefix: env.API_PREFIX });

  // 5. Hooks de Banco de Dados
  app.addHook("onReady", async () => {
    await connectDatabase();
    app.log.info("Conexão com PostgreSQL estabelecida.");
  });

  app.addHook("onClose", async () => {
    const { disconnectDatabase } = await import("@database/prisma.js");
    await disconnectDatabase();
    app.log.info("Conexão com PostgreSQL encerrada.");
  });

  return app;
}
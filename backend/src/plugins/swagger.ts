import type { FastifyInstance } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import { env } from "@config/env.js";

export async function registerSwagger(app: FastifyInstance): Promise<void> {
  if (!env.SWAGGER_ENABLED) {
    return;
  }

  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: env.APP_NAME,
        description:
          "API REST da plataforma AquaMinerals — mineração sustentável de minerais presentes na água do mar.",
        version: env.APP_VERSION,
      },
      servers: [
        {
          url: `http://${env.HOST === "0.0.0.0" ? "localhost" : env.HOST}:${env.PORT}`,
          description: env.NODE_ENV,
        },
      ],
      tags: [],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            description: "Reservado para autenticação JWT (próximas fases).",
          },
        },
      },
    },
  });

  await app.register(fastifySwaggerUi, {
    routePrefix: env.SWAGGER_ROUTE,
    uiConfig: {
      docExpansion: "list",
      deepLinking: true,
    },
  });
}

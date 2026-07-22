import type { FastifyInstance } from "fastify";
import { DashboardController } from "../controllers/DashboardController.js";
import { verifyJwt } from "@shared/middlewares/verifyJwt.js";

export async function dashboardRoutes(app: FastifyInstance): Promise<void> {
  const dashboardController = new DashboardController();

  // Protegemos o dashboard com JWT (apenas usuários logados veem as métricas)
  app.addHook("preHandler", verifyJwt);

  app.get("/metrics", {
    schema: {
      tags: ["Dashboard"],
      summary: "Obter métricas agregadas para os gráficos do Dashboard",
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          type: "object",
          properties: {
            users: { type: "number" },
            reports: {
              type: "object",
              properties: {
                total: { type: "number" },
                byStatus: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      status: { type: "string" },
                      _count: { type: "number" },
                    },
                  },
                },
              },
            },
            waterQuality: {
              type: "object",
              properties: {
                averageSalinity: { type: "number" },
                averagePh: { type: "number" },
              },
            },
            projects: {
              type: "object",
              properties: {
                active: { type: "number" },
              },
            },
            collectionPoints: { type: "number" },
          },
        },
      },
    },
  }, dashboardController.getMetrics);
}
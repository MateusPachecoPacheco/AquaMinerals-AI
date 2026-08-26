import type { FastifyInstance } from "fastify";
import { MapController } from "../controllers/MapController.js";

export async function mapRoutes(app: FastifyInstance): Promise<void> {
  const mapController = new MapController();

  app.get("/points", {
    schema: {
      tags: ["Mapa"],
      summary: "Listar todos os pontos de coleta geolocalizados (Público)",
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string", format: "uuid" },
              name: { type: "string" },
              description: { type: "string", nullable: true },
              latitude: { type: "number" },
              longitude: { type: "number" },
              salinityLevel: { type: "number", nullable: true },
              phLevel: { type: "number", nullable: true },
            },
          },
        },
      },
    },
  }, mapController.getPoints);

  app.get("/points/:id", {
    schema: {
      tags: ["Mapa"],
      summary: "Obter detalhes científicos de um ponto de coleta específico",
      params: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
        },
        required: ["id"],
      },
    },
  }, mapController.getPointById);
}
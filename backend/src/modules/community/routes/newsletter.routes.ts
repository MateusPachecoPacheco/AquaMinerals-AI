import type { FastifyInstance } from "fastify";
import { SubscribeNewsletterService } from "../services/SubscribeNewsletterService.js";

export async function newsletterRoutes(app: FastifyInstance): Promise<void> {
  app.post("/subscribe", {
    schema: {
      tags: ["Newsletter"],
      summary: "Assinar newsletter da plataforma",
      body: {
        type: "object",
        required: ["email"],
        properties: {
          email: { type: "string", format: "email" },
        },
      },
    },
    handler: async (request, reply) => {
      const { email } = request.body as { email: string };
      const service = new SubscribeNewsletterService();
      const result = await service.execute(email);
      return reply.status(201).send(result);
    },
  });
}
import type { FastifyRequest, FastifyReply } from "fastify";
import { GetDashboardMetricsService } from "../services/GetDashboardMetricsService.js";
import { PrismaDashboardRepository } from "../repositories/PrismaDashboardRepository.js";

export class DashboardController {
  public async getMetrics(_request: FastifyRequest, reply: FastifyReply) {
    const dashboardRepository = new PrismaDashboardRepository();
    const service = new GetDashboardMetricsService(dashboardRepository);
    const metrics = await service.execute();
    return reply.status(200).send(metrics);
  }
}
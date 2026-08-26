import type { FastifyRequest, FastifyReply } from "fastify";
import { PrismaDashboardRepository } from "../repositories/PrismaDashboardRepository.js";
import { GetDashboardMetricsService } from "../services/GetDashboardMetricsService.js";

export class DashboardController {
  async getMetrics(request: FastifyRequest, reply: FastifyReply) {
    const dashboardRepository = new PrismaDashboardRepository();
    const getDashboardMetricsService = new GetDashboardMetricsService(dashboardRepository);
    
    const metrics = await getDashboardMetricsService.execute();
    return reply.status(200).send(metrics);
  }
}
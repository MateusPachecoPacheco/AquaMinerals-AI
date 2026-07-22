import type { IDashboardRepository } from "../repositories/IDashboardRepository.js";

export class GetDashboardMetricsService {
  constructor(private dashboardRepository: IDashboardRepository) {}

  async execute() {
    const metrics = await this.dashboardRepository.getMetrics();
    
    // Formatação amigável para o Frontend (arredondando casas decimais)
    return {
      users: metrics.totalUsers,
      reports: {
        total: metrics.totalReports,
        byStatus: metrics.reportsByStatus,
      },
      waterQuality: {
        averageSalinity: metrics.averageSalinity ? Number(metrics.averageSalinity.toFixed(2)) : 0,
        averagePh: metrics.averagePh ? Number(metrics.averagePh.toFixed(2)) : 0,
      },
      projects: {
        active: metrics.totalActiveProjects,
      },
      collectionPoints: metrics.totalCollectionPoints,
    };
  }
}
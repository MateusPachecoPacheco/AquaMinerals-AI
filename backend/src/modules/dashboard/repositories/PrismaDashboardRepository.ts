import { prisma } from "@database/prisma.js";
import { ProjectStatus } from "@prisma/client";
import type { IDashboardRepository, DashboardMetrics } from "./IDashboardRepository.js";

export class PrismaDashboardRepository implements IDashboardRepository {
  async getMetrics(): Promise<DashboardMetrics> {
    // Executa múltiplas consultas em paralelo para máxima performance (Promise.all)
    const [
      totalUsers,
      totalReports,
      reportsByStatus,
      salinityAgg,
      phAgg,
      totalActiveProjects,
      totalCollectionPoints,
    ] = await Promise.all([
      prisma.user.count({ where: { deletedAt: null } }),
      prisma.environmentalReport.count(),
      prisma.environmentalReport.groupBy({
        by: ["status"],
        _count: true,
      }),
      prisma.collectionPoint.aggregate({ _avg: { salinityLevel: true } }),
      prisma.collectionPoint.aggregate({ _avg: { phLevel: true } }),
      prisma.educationalProject.count({ where: { status: ProjectStatus.PUBLISHED } }),
      prisma.collectionPoint.count(),
    ]);

    return {
      totalUsers,
      totalReports,
      reportsByStatus: reportsByStatus.map((r) => ({
        status: r.status,
        _count: r._count,
      })),
      averageSalinity: salinityAgg._avg.salinityLevel,
      averagePh: phAgg._avg.phLevel,
      totalActiveProjects,
      totalCollectionPoints,
    };
  }
}
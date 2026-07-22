import { prisma } from "@database/prisma.js";
import type { EnvironmentalReport, ReportStatus, ReportType } from "@prisma/client";
import type { IReportsRepository } from "./IReportsRepository.js";

export class PrismaReportsRepository implements IReportsRepository {
  async create(data: {
    title: string;
    description: string;
    type: ReportType;
    userId: string;
    latitude?: number;
    longitude?: number;
    address?: string;
  }): Promise<EnvironmentalReport> {
    return prisma.environmentalReport.create({ data });
  }

  async findAll(filters?: { status?: ReportStatus; type?: ReportType }): Promise<EnvironmentalReport[]> {
    return prisma.environmentalReport.findMany({
      where: filters,
      include: {
        user: {
          select: { name: true, email: true }, // Inclui o nome de quem fez a denúncia
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id: string): Promise<EnvironmentalReport | null> {
    return prisma.environmentalReport.findUnique({ where: { id } });
  }

  async updateStatus(id: string, status: ReportStatus): Promise<EnvironmentalReport> {
    return prisma.environmentalReport.update({
      where: { id },
      data: { status },
    });
  }
}
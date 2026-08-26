import type { EnvironmentalReport, ReportStatus, ReportType } from "@prisma/client";

export interface IReportsRepository {
  create(data: {
    title: string;
    description: string;
    type: ReportType;
    userId: string;
    latitude?: number;
    longitude?: number;
    address?: string;
  }): Promise<EnvironmentalReport>;

  findAll(filters?: { status?: ReportStatus; type?: ReportType }): Promise<EnvironmentalReport[]>;
  
  findById(id: string): Promise<EnvironmentalReport | null>;
  
  updateStatus(id: string, status: ReportStatus): Promise<EnvironmentalReport>;
}
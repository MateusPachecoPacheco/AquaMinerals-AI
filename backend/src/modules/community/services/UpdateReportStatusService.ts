import type { IReportsRepository } from "../repositories/IReportsRepository.js";
import { AppError } from "@shared/errors/AppError.js";
import type { UpdateReportStatusDto } from "../validators/community.validators.js";

export class UpdateReportStatusService {
  constructor(private reportsRepository: IReportsRepository) {}

  async execute(reportId: string, data: UpdateReportStatusDto) {
    const report = await this.reportsRepository.findById(reportId);
    
    if (!report) {
      throw new AppError("Denúncia ou sugestão não encontrada.", 404);
    }

    return this.reportsRepository.updateStatus(reportId, data.status);
  }
}
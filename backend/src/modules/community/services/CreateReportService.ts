import type { IReportsRepository } from "../repositories/IReportsRepository.js";
import type { CreateReportBodyDto } from "../validators/community.validators.js";

export class CreateReportService {
  constructor(private reportsRepository: IReportsRepository) {}

  async execute(userId: string, data: CreateReportBodyDto) {
    const report = await this.reportsRepository.create({
      ...data,
      userId,
    });
    return report;
  }
}
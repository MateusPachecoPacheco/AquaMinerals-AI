import type { IReportsRepository } from "../repositories/IReportsRepository.js";
import type { ListReportsQueryDto } from "../validators/community.validators.js";

export class ListReportsService {
  constructor(private reportsRepository: IReportsRepository) {}

  async execute(filters: ListReportsQueryDto) {
    return this.reportsRepository.findAll(filters);
  }
}
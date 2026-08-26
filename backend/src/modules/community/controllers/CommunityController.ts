import type { FastifyRequest, FastifyReply } from "fastify";
import { PrismaReportsRepository } from "../repositories/PrismaReportsRepository.js";
import { CreateReportService } from "../services/CreateReportService.js";
import { ListReportsService } from "../services/ListReportsService.js";
import { UpdateReportStatusService } from "../services/UpdateReportStatusService.js";
import { 
  createReportBodySchema, 
  listReportsQuerySchema, 
  updateReportStatusSchema 
} from "../validators/community.validators.js";

export class CommunityController {
  async createReport(request: FastifyRequest, _reply: FastifyReply) {
    const body = createReportBodySchema.parse(request.body);
    
    const repository = new PrismaReportsRepository();
    const service = new CreateReportService(repository);
    
    return service.execute(request.user.sub, body);
  }

  async listReports(request: FastifyRequest, _reply: FastifyReply) {
    const query = listReportsQuerySchema.parse(request.query);
    
    const repository = new PrismaReportsRepository();
    const service = new ListReportsService(repository);
    
    return service.execute(query);
  }

  async updateStatus(request: FastifyRequest, _reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const body = updateReportStatusSchema.parse(request.body);
    
    const repository = new PrismaReportsRepository();
    const service = new UpdateReportStatusService(repository);
    
    return service.execute(id, body);
  }
}
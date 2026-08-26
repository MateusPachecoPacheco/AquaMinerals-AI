import type { FastifyRequest, FastifyReply } from "fastify";
import { PrismaCollectionPointsRepository } from "../repositories/PrismaCollectionPointsRepository.js";
import { ListCollectionPointsService } from "../services/ListCollectionPointsService.js";
import { AppError } from "@shared/errors/AppError.js";

export class MapController {
  async getPoints(_request: FastifyRequest, reply: FastifyReply) {
    const repository = new PrismaCollectionPointsRepository();
    const service = new ListCollectionPointsService(repository);
    
    const points = await service.execute();
    return reply.status(200).send(points);
  }

  async getPointById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const { id } = request.params;
    const repository = new PrismaCollectionPointsRepository();
    const point = await repository.findById(id);
    
    if (!point) {
      throw new AppError("Ponto de coleta não encontrado.", 404);
    }
    
    return reply.status(200).send(point);
  }
}
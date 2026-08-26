import { prisma } from "@database/prisma.js";
import type { CollectionPoint } from "@prisma/client";
import type { ICollectionPointsRepository } from "./ICollectionPointsRepository.js";

export class PrismaCollectionPointsRepository implements ICollectionPointsRepository {
  async findAll(): Promise<CollectionPoint[]> {
    return prisma.collectionPoint.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id: string): Promise<CollectionPoint | null> {
    return prisma.collectionPoint.findUnique({ where: { id } });
  }
}
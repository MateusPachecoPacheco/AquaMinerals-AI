import type { CollectionPoint } from "@prisma/client";

export interface ICollectionPointsRepository {
  findAll(): Promise<CollectionPoint[]>;
  findById(id: string): Promise<CollectionPoint | null>;
}
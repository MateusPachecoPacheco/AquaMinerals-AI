import type { ICollectionPointsRepository } from "../repositories/ICollectionPointsRepository.js";

export class ListCollectionPointsService {
  constructor(private collectionPointsRepository: ICollectionPointsRepository) {}

  async execute() {
    const points = await this.collectionPointsRepository.findAll();
    return points;
  }
}
import { prisma } from "@database/prisma.js";
import type { User } from "@prisma/client";
import type { IUsersRepository } from "./IUsersRepository.js";

export class PrismaUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findFirst({ where: { email, deletedAt: null } });
  }

  async create(data: { name: string; email: string; password: string }): Promise<User> {
    return prisma.user.create({ data });
  }
}

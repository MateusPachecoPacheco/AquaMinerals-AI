import { prisma } from "@database/prisma.js";
import type { User } from "@prisma/client";
import type { IUsersRepository } from "./IUsersRepository.js";

export class PrismaUsersRepository implements IUsersRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findFirst({ where: { id, deletedAt: null } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findFirst({ where: { email, deletedAt: null } });
  }

  async update(id: string, data: { name?: string; email?: string; password?: string }): Promise<User> {
    return prisma.user.update({ where: { id }, data });
  }

  async findAll(): Promise<User[]> {
    return prisma.user.findMany({ where: { deletedAt: null } });
  }

  async softDelete(id: string): Promise<void> {
    await prisma.user.update({ where: { id }, data: { deletedAt: new Date() } });
  }
}
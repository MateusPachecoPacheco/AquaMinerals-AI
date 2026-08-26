import type { User } from "@prisma/client";

export interface IUsersRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, data: { name?: string; email?: string; password?: string }): Promise<User>;
  findAll(): Promise<User[]>;
  softDelete(id: string): Promise<void>;
}
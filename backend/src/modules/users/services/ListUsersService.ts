import type { IUsersRepository } from "../repositories/IUsersRepository.js";
import type { User } from "@prisma/client";

export class ListUsersService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    const users = await this.usersRepository.findAll();
    return users.map((user: User) => {
      const { password, ...rest } = user;
      return rest;
    });
  }
}
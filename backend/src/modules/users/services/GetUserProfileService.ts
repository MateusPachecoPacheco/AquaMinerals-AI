import type { IUsersRepository } from "../repositories/IUsersRepository.js"; // <-- Deve ser do próprio módulo users
import { AppError } from "@shared/errors/AppError.js";

export class GetUserProfileService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userId: string) {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }
    
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
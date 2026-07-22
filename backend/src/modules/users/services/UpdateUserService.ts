import bcrypt from "bcrypt";
import type { IUsersRepository } from "../repositories/IUsersRepository.js"; // <-- Deve ser do próprio módulo users
import { AppError } from "@shared/errors/AppError.js";
import type { UpdateUserBodyDto } from "../validators/users.validators.js";

export class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userId: string, data: UpdateUserBodyDto) {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    if (data.email && data.email !== user.email) {
      const emailAlreadyExists = await this.usersRepository.findByEmail(data.email);
      if (emailAlreadyExists) {
        throw new AppError("Este e-mail já está em uso por outro usuário.", 409);
      }
    }

    const updateData: any = { ...data };
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    const updatedUser = await this.usersRepository.update(userId, updateData);
    const { password, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }
}
import bcrypt from "bcrypt";
// IMPORTANTE: Importa do repositório do próprio módulo AUTH
import type { IUsersRepository } from "../repositories/IUsersRepository.js";
import { InvalidCredentialsError } from "../errors/InvalidCredentialsError.js";
import { signAccessToken, signRefreshToken } from "@shared/utils/jwt.js";
import type { LoginBodyDto } from "../validators/auth.validators.js";

export class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: LoginBodyDto) {
    const user = await this.usersRepository.findByEmail(email);
    
    if (!user) {
      throw new InvalidCredentialsError();
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      throw new InvalidCredentialsError();
    }

    const payload = { sub: user.id, role: user.role };

    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }
}
import bcrypt from "bcrypt";
// IMPORTANTE: Importa do repositório do próprio módulo AUTH
import type { IUsersRepository } from "../repositories/IUsersRepository.js"; 
import { EmailAlreadyExistsError } from "../errors/EmailAlreadyExistsError.js";
import type { RegisterBodyDto } from "../validators/auth.validators.js";

export class RegisterUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: RegisterBodyDto) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    
    if (userAlreadyExists) {
      throw new EmailAlreadyExistsError();
    }

    const passwordHash = await bcrypt.hash(password, 10);

    // O método create existe na interface importada acima
    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    };
  }
}
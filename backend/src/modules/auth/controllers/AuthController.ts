import type { FastifyRequest, FastifyReply } from "fastify";
// IMPORTANTE: O caminho relativo "../repositories" garante que pegamos o do módulo AUTH
import { PrismaUsersRepository } from "../repositories/PrismaUsersRepository.js"; 
import { RegisterUserService } from "../services/RegisterUserService.js";
import { AuthenticateUserService } from "../services/AuthenticateUserService.js";
import { registerBodySchema, loginBodySchema } from "../validators/auth.validators.js";

export class AuthController {
  async register(request: FastifyRequest, reply: FastifyReply) {
    const body = registerBodySchema.parse(request.body);
    
    const usersRepository = new PrismaUsersRepository();
    const registerUserService = new RegisterUserService(usersRepository);
    
    const user = await registerUserService.execute(body);
    
    return reply.status(201).send(user);
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    const body = loginBodySchema.parse(request.body);
    
    const usersRepository = new PrismaUsersRepository();
    const authenticateUserService = new AuthenticateUserService(usersRepository);
    
    const result = await authenticateUserService.execute(body);
    
    return reply.status(200).send(result);
  }
}
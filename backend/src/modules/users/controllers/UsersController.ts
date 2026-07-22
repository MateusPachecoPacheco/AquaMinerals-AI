import type { FastifyRequest, FastifyReply } from "fastify";
import { PrismaUsersRepository } from "../repositories/PrismaUsersRepository.js";
import { GetUserProfileService } from "../services/GetUserProfileService.js";
import { UpdateUserService } from "../services/UpdateUserService.js";
import { ListUsersService } from "../services/ListUsersService.js"; // <-- Plural
import { updateUserBodySchema } from "../validators/users.validators.js";

export class UsersController {
  async me(request: FastifyRequest, _reply: FastifyReply) {
    const usersRepository = new PrismaUsersRepository();
    const getUserProfileService = new GetUserProfileService(usersRepository);
    return getUserProfileService.execute(request.user.sub);
  }

  async update(request: FastifyRequest, _reply: FastifyReply) {
    const body = updateUserBodySchema.parse(request.body);
    const usersRepository = new PrismaUsersRepository();
    const updateUserService = new UpdateUserService(usersRepository);
    return updateUserService.execute(request.user.sub, body);
  }

  async list(_request: FastifyRequest, _reply: FastifyReply) {
    const usersRepository = new PrismaUsersRepository();
    const listUsersService = new ListUsersService(usersRepository);
    return listUsersService.execute();
  }
}
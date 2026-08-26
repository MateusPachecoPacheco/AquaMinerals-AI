import { AppError } from "@shared/errors/AppError.js";

export class EmailAlreadyExistsError extends AppError {
  constructor() {
    super("Este e-mail já está cadastrado na plataforma.", 409);
  }
}
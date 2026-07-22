import { AppError } from "@shared/errors/AppError.js";

export class InvalidCredentialsError extends AppError {
  constructor() {
    // Por segurança, não informamos se o erro foi o e-mail ou a senha.
    super("E-mail ou senha inválidos.", 401);
    this.name = "InvalidCredentialsError";
  }
}
export class AppError extends Error {
  public readonly statusCode: number;
  public override name: string; // <-- Adicionado para satisfazer o TypeScript

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    // Garante que a instância mantenha o prototype correto da classe filha
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
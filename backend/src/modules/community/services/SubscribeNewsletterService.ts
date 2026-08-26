import { AppError } from "@shared/errors/AppError.js";

export class SubscribeNewsletterService {
  async execute(email: string) {
    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new AppError("E-mail inválido.", 400);
    }

    // Em produção, aqui salvaríamos em uma tabela `newsletter_subscribers`
    // Por ora, simulamos o sucesso com um log
    console.log(`📧 Nova assinatura de newsletter: ${email}`);

    return {
      success: true,
      message: "Inscrição realizada com sucesso! Você receberá nossas novidades em breve.",
      subscribedAt: new Date().toISOString(),
    };
  }
}
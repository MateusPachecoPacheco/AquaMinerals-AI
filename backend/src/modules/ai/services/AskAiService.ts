import type { IAiProvider } from "../providers/IAiProvider.js";
import type { AskAiBodyDto } from "../validators/ai.validators.js";

export class AskAiService {
  constructor(private aiProvider: IAiProvider) {}

  async execute(_userId: string, data: AskAiBodyDto) {
    // Em um cenário real, aqui salvaríamos o histórico da conversa no banco
    // Por agora, apenas processamos a mensagem com o Provider
    
    const response = await this.aiProvider.generateResponse(data.message, data.context);

    return {
      role: "assistant",
      content: response,
      timestamp: new Date().toISOString(),
    };
  }
}
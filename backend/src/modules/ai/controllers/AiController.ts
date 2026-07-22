import type { FastifyRequest, FastifyReply } from "fastify";
import { MockAiProvider } from "../providers/MockAiProvider.js";
import { AskAiService } from "../services/AskAiService.js";
import { askAiBodySchema } from "../validators/ai.validators.js";

export class AiController {
  async chat(request: FastifyRequest, _reply: FastifyReply) {
    const body = askAiBodySchema.parse(request.body);
    
    // Injeção de dependência do Provider
    const aiProvider = new MockAiProvider(); 
    const askAiService = new AskAiService(aiProvider);
    
    // Passamos o ID do usuário logado para futuro salvamento de histórico
    return askAiService.execute(request.user.sub, body);
  }
}
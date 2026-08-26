import { z } from "zod";

export const askAiBodySchema = z.object({
  message: z.string().min(1, "A mensagem não pode ser vazia").max(1000),
  context: z.string().optional(), // Contexto adicional da conversa
});

export type AskAiBodyDto = z.infer<typeof askAiBodySchema>;
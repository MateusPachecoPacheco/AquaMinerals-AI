import { z } from "zod";

export const registerBodySchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Formato de e-mail inválido").toLowerCase(),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export const loginBodySchema = z.object({
  email: z.string().email("Formato de e-mail inválido").toLowerCase(),
  password: z.string().min(6, "A senha é obrigatória"),
});

export type RegisterBodyDto = z.infer<typeof registerBodySchema>;
export type LoginBodyDto = z.infer<typeof loginBodySchema>;
import { z } from "zod";

export const updateUserBodySchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres").optional(),
  email: z.string().email("Formato de e-mail inválido").toLowerCase().optional(),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").optional(),
});

export type UpdateUserBodyDto = z.infer<typeof updateUserBodySchema>;
import { z } from "zod";
import { ReportType, ReportStatus } from "@prisma/client";

export const createReportBodySchema = z.object({
  title: z.string().min(5, "O título deve ter no mínimo 5 caracteres"),
  description: z.string().min(10, "A descrição deve ser mais detalhada"),
  type: z.nativeEnum(ReportType),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  address: z.string().optional(),
});

export const updateReportStatusSchema = z.object({
  status: z.nativeEnum(ReportStatus),
});

export const listReportsQuerySchema = z.object({
  status: z.nativeEnum(ReportStatus).optional(),
  type: z.nativeEnum(ReportType).optional(),
});

export type CreateReportBodyDto = z.infer<typeof createReportBodySchema>;
export type UpdateReportStatusDto = z.infer<typeof updateReportStatusSchema>;
export type ListReportsQueryDto = z.infer<typeof listReportsQuerySchema>;
import type { FastifyInstance } from "fastify";

export type AppInstance = FastifyInstance;

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export type ApiErrorResponse = {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
};

export type PaginationMeta = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};

export type PaginatedResponse<T> = ApiResponse<T> & {
  meta: PaginationMeta;
};

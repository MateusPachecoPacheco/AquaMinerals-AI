import "dotenv/config";

import { env } from "@config/env.js";
import { buildApp } from "./app.js";

async function start(): Promise<void> {
  const app = await buildApp();

  try {
    await app.listen({
      port: env.PORT,
      host: env.HOST,
    });

    app.log.info(
      {
        port: env.PORT,
        host: env.HOST,
        environment: env.NODE_ENV,
        swagger: env.SWAGGER_ENABLED ? env.SWAGGER_ROUTE : "disabled",
      },
      `${env.APP_NAME} iniciada com sucesso.`,
    );
  } catch (error) {
    app.log.error(error, "Falha ao iniciar o servidor.");
    process.exit(1);
  }

  const shutdown = async (signal: string): Promise<void> => {
    app.log.info({ signal }, "Encerrando servidor...");
    await app.close();
    process.exit(0);
  };

  process.on("SIGINT", () => {
    void shutdown("SIGINT");
  });

  process.on("SIGTERM", () => {
    void shutdown("SIGTERM");
  });
}

start().catch((error: unknown) => {
  console.error("Erro fatal ao iniciar a aplicação:", error);
  process.exit(1);
});

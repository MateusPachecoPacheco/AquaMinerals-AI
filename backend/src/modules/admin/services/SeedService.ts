import { prisma } from "@database/prisma.js";
import bcrypt from "bcrypt";

export class SeedService {
  async execute(): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      console.log("🌱 Iniciando seed do banco de dados...");

      // Verificar se já existem usuários
      const existingUsers = await prisma.user.count();
      if (existingUsers > 0) {
        return {
          success: true,
          message: "Seed já foi executado anteriormente. Banco já contém dados.",
          data: { users: existingUsers },
        };
      }

      // Criar usuários de teste
      const hashedPassword = await bcrypt.hash("123456", 10);

      const users = await Promise.all([
        prisma.user.create({
          data: {
            name: "Usuário Teste",
            email: "usuario@aquaminerals.com",
            password: hashedPassword,
            role: "USER",
          },
        }),
        prisma.user.create({
          data: {
            name: "Administrador",
            email: "admin@aquaminerals.com",
            password: hashedPassword,
            role: "ADMIN",
          },
        }),
      ]);

      console.log("✅ Usuários criados com sucesso!");

      // Criar pontos de coleta de exemplo (com campos corretos do schema)
      const collectionPoints = await Promise.all([
        prisma.collectionPoint.create({
          data: {
            name: "Ponto de Coleta Madre de Deus",
            description: "Estação de monitoramento costeiro em Madre de Deus - BA",
            latitude: -12.7409,
            longitude: -38.6356,
            salinityLevel: 35.2,
            phLevel: 8.1,
          },
        }),
        prisma.collectionPoint.create({
          data: {
            name: "Estação Baía de Todos os Santos",
            description: "Monitoramento ambiental da Baía de Todos os Santos",
            latitude: -12.9730,
            longitude: -38.5109,
            salinityLevel: 34.8,
            phLevel: 8.2,
          },
        }),
      ]);

      console.log("✅ Pontos de coleta criados com sucesso!");

      // Criar indicadores de dashboard
      const indicators = await Promise.all([
        prisma.dashboardIndicator.create({
          data: {
            metricName: "Minerais Extraídos",
            value: 1250.5,
            unit: "kg",
          },
        }),
        prisma.dashboardIndicator.create({
          data: {
            metricName: "Qualidade da Água",
            value: 8.2,
            unit: "pH",
          },
        }),
        prisma.dashboardIndicator.create({
          data: {
            metricName: "Salinidade Média",
            value: 35.0,
            unit: "PSU",
          },
        }),
      ]);

      console.log("✅ Indicadores do dashboard criados com sucesso!");

      return {
        success: true,
        message: "Seed executado com sucesso!",
        data: {
          users: users.length,
          collectionPoints: collectionPoints.length,
          indicators: indicators.length,
        },
      };
    } catch (error: any) {
      console.error("❌ Erro ao executar seed:", error);
      return {
        success: false,
        message: "Erro ao executar seed",
        data: { error: error.message },
      };
    }
  }
}
import { PrismaClient, UserRole, ReportType, ReportStatus, ProjectStatus } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do AquaMinerals (Madre de Deus - BA)...");

  const passwordHash = await bcrypt.hash("123456", 10);
  
  // 1. Admin (Apenas executamos a criação, não guardamos em variável pois não usamos o ID depois)
  await prisma.user.upsert({
    where: { email: "admin@aquaminerals.com" },
    update: {},
    create: {
      name: "Administrador Aqua",
      email: "admin@aquaminerals.com",
      password: passwordHash,
      role: UserRole.ADMIN,
    },
  });

  // 2. Moderator (Guardamos na variável pois usaremos o moderator.id abaixo)
  const moderator = await prisma.user.upsert({
    where: { email: "moderador@aquaminerals.com" },
    update: {},
    create: {
      name: "Marina Silva",
      email: "moderador@aquaminerals.com",
      password: passwordHash,
      role: UserRole.MODERATOR,
    },
  });

  // 3. User (Guardamos na variável pois usaremos o user.id abaixo)
  const user = await prisma.user.upsert({
    where: { email: "usuario@aquaminerals.com" },
    update: {},
    create: {
      name: "Carlos Pescador",
      email: "usuario@aquaminerals.com",
      password: passwordHash,
      role: UserRole.USER,
    },
  });
  
  console.log("✅ Usuários criados (Admin, Moderador, Usuário).");

  await prisma.collectionPoint.createMany({
    data: [
      {
        name: "Praia de Sua (Ponto de Referência)",
        description: "Área próxima ao cais, monitorada para extração de sais minerais e análise de impacto ambiental.",
        latitude: -12.7415,
        longitude: -38.6218,
        salinityLevel: 35.2, 
        phLevel: 8.1,
      },
      {
        name: "Ponta do Padre",
        description: "Ponto de coleta em área de manguezal, rico em biodiversidade e minerais dissolvidos.",
        latitude: -12.7520,
        longitude: -38.6150,
        salinityLevel: 34.8,
        phLevel: 8.0,
      },
      {
        name: "Ilha de São Paulo",
        description: "Área de mar aberto na Baía de Todos-os Santos, ideal para coleta de água com alta pureza para extração de Magnésio.",
        latitude: -12.7280,
        longitude: -38.6050,
        salinityLevel: 36.1,
        phLevel: 8.2,
      },
    ],
    skipDuplicates: true,
  });
  console.log("✅ Pontos de coleta geolocalizados criados.");

  await prisma.environmentalReport.createMany({
    data: [
      {
        title: "Mancha oleosa próxima à Praia de Sua",
        description: "Identificada mancha escura na superfície da água, possível descarte irregular de efluentes. Forte odor.",
        type: ReportType.ENVIRONMENTAL_ISSUE,
        status: ReportStatus.IN_REVIEW,
        latitude: -12.7430,
        longitude: -38.6200,
        address: "Praia de Sua, Madre de Deus - BA",
        userId: user.id,
      },
      {
        title: "Sugestão: Instalação de filtros de microplásticos",
        description: "Sugiro que a plataforma inclua um projeto de conscientização sobre microplásticos nas praias locais.",
        type: ReportType.SUGGESTION,
        status: ReportStatus.PENDING,
        userId: user.id,
      },
      {
        title: "Elogio à limpeza da Ponta do Padre",
        description: "A comunidade local organizou um mutirão de limpeza e a praia está impecável. Parabéns à iniciativa!",
        type: ReportType.PRAISE,
        status: ReportStatus.RESOLVED,
        latitude: -12.7520,
        longitude: -38.6150,
        userId: moderator.id,
      },
    ],
    skipDuplicates: true,
  });
  console.log("✅ Relatórios ambientais da comunidade criados.");

  await prisma.educationalProject.createMany({
    data: [
      {
        title: "O Ciclo do Magnésio na Água do Mar",
        description: "Entenda como o magnésio é extraído de forma sustentável e sua importância para a indústria farmacêutica.",
        imageUrl: "https://images.unsplash.com/photo-1530030078344-81e9f6b9025c?auto=format&fit=crop&q=80&w=800",
        status: ProjectStatus.PUBLISHED,
      },
      {
        title: "Manguezais de Madre de Deus: Berçário e Filtro Natural",
        description: "Estudo sobre como os manguezais protegem a costa e filtram impurezas, mantendo o equilíbrio mineral.",
        imageUrl: "https://images.unsplash.com/photo-1589396254854-fd97a28e3c6d?auto=format&fit=crop&q=80&w=800",
        status: ProjectStatus.PUBLISHED,
      },
    ],
    skipDuplicates: true,
  });
  console.log("✅ Projetos educativos criados.");

  const now = new Date();
  await prisma.dashboardIndicator.createMany({
    data: [
      { metricName: "Sal Extraído (Toneladas)", value: 145.5, unit: "t", recordedAt: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000) },
      { metricName: "Sal Extraído (Toneladas)", value: 162.0, unit: "t", recordedAt: now },
      { metricName: "Qualidade da Água (Índice)", value: 92.5, unit: "%", recordedAt: now },
      { metricName: "Lítio Identificado", value: 0.17, unit: "ppm", recordedAt: now },
      { metricName: "Projetos Ativos", value: 5, unit: "un", recordedAt: now },
    ],
    skipDuplicates: true,
  });
  console.log("✅ Indicadores do dashboard criados.");

  console.log("🎉 Seed concluído com sucesso! O banco de dados está pronto para uso.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Erro no seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
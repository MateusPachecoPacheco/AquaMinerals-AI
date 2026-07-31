# ============================================
# AquaMinerals API - Dockerfile de Produção
# ============================================

# Stage 1: Base image
FROM node:20-alpine AS base
WORKDIR /app

# Stage 2: Instalar dependências
FROM base AS deps
COPY package.json package-lock.json* ./
# Usa npm install (mais flexível que npm ci)
RUN npm install --no-audit --no-fund

# Stage 3: Build (apenas gerar Prisma Client)
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Gera o cliente do Prisma
RUN npx prisma generate

# Stage 4: Imagem final de produção
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3333
ENV HOST=0.0.0.0

# Copia dependências e arquivos necessários
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src

# Instala tsx globalmente para rodar TypeScript em produção
RUN npm install -g tsx

# Expõe a porta
EXPOSE 3333

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3333/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Comando de início
CMD ["tsx", "src/server.ts"]
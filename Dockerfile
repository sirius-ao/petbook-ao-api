FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

RUN npm ci --only=production && npx prisma generate

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

RUN npm ci --only=production && npx prisma generate

COPY --from=builder /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["node", "dist/main"]
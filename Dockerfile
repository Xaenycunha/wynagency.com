# --- Etapa 1: build da aplicação ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./
RUN npm install

# Copia o restante do projeto e faz o build
COPY . .
RUN npm run build

# --- Etapa 2: servidor para produção ---
FROM node:20-alpine AS runner
WORKDIR /app

# Copia tudo da etapa de build
COPY --from=builder /app ./

# Define variável de ambiente de produção
ENV NODE_ENV=production

# Exposição da porta padrão do Next.js
EXPOSE 3000

# Comando que roda o servidor
CMD ["npm", "start"]

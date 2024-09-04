# Dockerfile (Frontend - Next.js)

# Use uma imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o arquivo de dependências para o container
COPY package.json package-lock.json ./

# Instala as dependências necessárias
RUN npm install

# Copia o código do projeto para o container
COPY . .

# Constrói o projeto Next.js
RUN npm run dev

# Expõe a porta que o Next.js usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]

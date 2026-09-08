# syntax=docker.io/docker/dockerfile:1

FROM node:lts-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci 

COPY . .

RUN npm run build

FROM base AS runner

WORKDIR /app

COPY package.json package-lock.json ./

COPY --from=builder /app/node_modules /app/node_modules

COPY --from=builder /app/build /app/build

EXPOSE 3000

CMD ["npm", "run", "start"]

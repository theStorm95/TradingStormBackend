FROM node:22-bookworm-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . . 

RUN npm run build

FROM node:22-bookworm-slim

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

RUN useradd -m appuser
USER appuser

EXPOSE 3000

CMD ["node", "dist/index.js"]
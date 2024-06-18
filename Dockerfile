ARG ENVIRONMENT=prod

# ------------------------------------------------------
FROM --platform=linux/arm64 node:20.13.1 as deps
WORKDIR /deps

RUN npm i -g pnpm


COPY package.json ./

# ------------------------------------------------------
FROM deps as dev
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD ["pnpm", "start"]

# ------------------------------------------------------
# FROM  --platform=arm64 node:18.18.0-alpine3.18 as build-stage
FROM deps as build-prod
WORKDIR /app

COPY package.json ./
RUN pnpm install

COPY . .
RUN pnpm run build

# RUN pnpm install --prod

# ------------------------------------------------------
FROM --platform=linux/amd64 nginx:1.21.1-alpine as prod
WORKDIR /app

COPY --from=build-prod /app/dist/transcord-front/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# ------------------------------------------------------
# Final stage to decide which base image to use
FROM ${ENVIRONMENT}

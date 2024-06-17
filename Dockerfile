FROM node:20.11.1-alpine3.19 as builder

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.21.3-alpine as runner

WORKDIR /usr/share/nginx/html/

COPY --from=builder /app/dist/transcord-front/browser/ .

COPY --from=builder /app/node_modules/ .



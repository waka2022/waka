FROM node:14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install 

RUN npm install -g @ionic/cli

COPY . /app

RUN ionic build

FROM nginx:1.22.0-alpine

COPY --from=build-step /app/www /usr/share/nginx/html
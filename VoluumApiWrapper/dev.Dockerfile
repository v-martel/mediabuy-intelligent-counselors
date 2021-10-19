FROM node:12

RUN npm i -g typescript ts-node eslint nodemon forever tsc-watch

EXPOSE 3500

ADD . /app/voluum-api-wrapper
WORKDIR /app/voluum-api-wrapper

RUN npm i

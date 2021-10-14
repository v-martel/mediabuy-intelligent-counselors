FROM node:12-alpine

RUN npm i -g typescript ts-node eslint nodemon forever

EXPOSE 3000
EXPOSE 5858

ADD . /app/VoluumApiWrapper

RUN npm i
RUN npm start

CMD ["npm", "run", "start"]


FROM node:14.15.1-alpine3.12

WORKDIR /app

COPY ./package.json /app
COPY ./yarn.lock /app

RUN yarn

COPY . /app

EXPOSE 3000

CMD [ "yarn", "start" ]

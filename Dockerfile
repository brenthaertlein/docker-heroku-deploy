FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn install

CMD ["node", "index.js"]

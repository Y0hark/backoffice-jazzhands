
FROM strapi/base

ENV NODE_ENV production

WORKDIR /jazzhands-backoffice

COPY package.json .

COPY .env .

RUN npm install

COPY . .

RUN npm run build --clean

EXPOSE 1337

CMD ["npm", "start"]
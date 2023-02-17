FROM node

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY nest-cli.json ./

RUN yarn install

COPY src ./src

CMD ["yarn", "start"]
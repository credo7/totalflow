FROM node:18-alpine

WORKDIR /app

ENV DATABASE_URL="postgresql://postgres:root@users_db:5432/users_db"

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./
COPY ./tsconfig.build.json ./
COPY ./nest-cli.json ./

RUN sed -i '/"@packages\/eslint-config-custom": "\*",/d' package.json \
    && sed -i '/"@packages\/shared-tsconfig": "\*",/d' package.json \
    && sed -i '/"@packages\/prettier-config": "\*",/d' package.json

RUN yarn install

COPY ./src ./src
COPY ./prisma ./prisma

RUN npx prisma generate

CMD ["yarn", "start:container"]

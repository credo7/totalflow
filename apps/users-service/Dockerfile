FROM node

WORKDIR /app

ENV DATABASE_URL="postgresql://postgres:root@users_db:5432/users_db"

COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./tsconfig.build.json ./
COPY ./nest-cli.json ./

RUN yarn install

COPY ./src ./src
COPY ./prisma ./prisma

RUN npx prisma generate

CMD ["yarn", "start:container"]
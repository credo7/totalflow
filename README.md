# TotalFlow Monorepo

## Backend Services

### Users service

#### Responsibilities:
- register
- login
- tokens handling
- information about user

### Mail service

#### Responsibilities:
- Sending mails
- No external api, only server-side services can interact with it

## Development

1. Setup `.env` file (Don't forget to fill secret fields)
```
USERS_POSTGRES_USER=postgres
USERS_POSTGRES_PASSWORD=***
USERS_POSTGRES_DB=users_db
USERS_POSTGRES_PORT=5432

USERS_SERVICE_PORT=3000
USERS_POSTGRES_HOST=users_db

JWT_ACCESS_TOKEN_SECRET=***
JWT_ACCESS_TOKEN_EXPIRATION_TIME=86400
JWT_REFRESH_TOKEN_SECRET=***
JWT_REFRESH_TOKEN_EXPIRATION_TIME=604800

GOOGLE_CLIENT_ID=***
GOOGLE_CLIENT_SECRET=***

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=***
MAIL_PASSWORD=***
MAIL_FROM=noreply@example.com

DATABASE_URL=postgresql://${USERS_POSTGRES_USER}:${USERS_POSTGRES_PASSWORD}@${USERS_POSTGRES_HOST}:${USERS_POSTGRES_PORT}/${USERS_POSTGRES_DB}
```

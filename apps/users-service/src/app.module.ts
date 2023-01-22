import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {SequelizeModule} from '@nestjs/sequelize';

import {AuthModule} from './auth/auth.module';
import {KafkaModule} from './kafka/kafka.module';
import {User} from './users/users.model';
import {UsersModule} from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User],
            autoLoadModels: true,
        }),
        UsersModule,
        AuthModule,
        KafkaModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

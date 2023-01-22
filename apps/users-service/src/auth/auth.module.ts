import {KafkaModule} from 'kafka/kafka.module';
import {UsersModule} from 'users/users.module';

import {forwardRef, Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';

import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            signOptions: {
                expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
            },
        }),
        KafkaModule,
    ],
    exports: [AuthService, JwtModule],
})
export class AuthModule {}

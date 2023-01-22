import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {GoogleStrategy, JwtStrategy} from './straregy';

@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, GoogleStrategy],
    imports: [
        JwtModule.register({
            secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            signOptions: {
                expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
            },
        }),
        PassportModule.register({defaultStrategy: 'google'}),
    ],
    exports: [AuthService, JwtModule],
})
export class AuthModule {}

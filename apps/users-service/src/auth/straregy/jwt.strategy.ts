import {ExtractJwt, Strategy} from 'passport-jwt';

import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {PassportStrategy} from '@nestjs/passport';
import {User} from '@prisma/client';

import {PrismaService} from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(config: ConfigService, private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_ACCESS_TOKEN_SECRET'),
        });
    }

    async validate(payload: {id: number; email: string}): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id: payload.id,
            },
        });
    }
}

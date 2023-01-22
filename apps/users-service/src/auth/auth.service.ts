import * as bcrypt from 'bcrypt';
// import {ProducerService} from 'kafka/producer.service';
import {PrismaService} from 'prisma/prisma.service';

import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {User} from '@prisma/client';

import {TokensDto, AuthDto} from './dto';
import {RefreshProps, UpsertUserRefreshTokenProps} from './types';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private prisma: PrismaService) {}
    // private producerService: ProducerService,

    async login(userDto: AuthDto): Promise<TokensDto> {
        const user = await this.validateUser(userDto);
        const tokens = await this.getTokens(user);
        await this.upsertUserRefreshToken({id: user.id, refreshToken: tokens.refreshToken});
        return tokens;
    }

    async register(authDto: AuthDto): Promise<TokensDto> {
        const candidate = await this.prisma.user.findUnique({where: {email: authDto.email}});

        if (candidate) {
            throw new HttpException(
                'User with this email address already exists',
                HttpStatus.BAD_REQUEST,
            );
        }

        const hashPassword = await bcrypt.hash(authDto.password, 5);

        const user = await this.prisma.user.create({
            data: {
                email: authDto.email,
                password: hashPassword,
            },
        });

        const tokens = await this.getTokens(user);

        await this.upsertUserRefreshToken({id: user.id, refreshToken: tokens.refreshToken});

        // await this.producerService.produce({
        //     topic: 'register',
        //     messages: [
        //         {
        //             value: authDto.email,
        //         },
        //     ],
        // });

        return tokens;
    }

    upsertUserRefreshToken = ({id, refreshToken}: UpsertUserRefreshTokenProps): Promise<User> =>
        this.prisma.user.update({
            where: {id},
            data: {refreshToken},
        });

    async refresh({id, oldRefreshToken}: RefreshProps): Promise<TokensDto> {
        const user = await this.prisma.user.findUnique({where: {id}});

        if (!user?.refreshToken) {
            throw new HttpException('No refresh token found', HttpStatus.BAD_REQUEST);
        }

        const isRefreshTokenMatching = oldRefreshToken === user.refreshToken;

        const isValid = await this.jwtService.verify(oldRefreshToken, {
            secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        });

        if (!user || !isRefreshTokenMatching || !isValid) {
            throw new HttpException('Incorrect refreshToken', HttpStatus.BAD_REQUEST);
        }
        const tokens = await this.getTokens(user);

        await this.upsertUserRefreshToken({id: user.id, refreshToken: tokens.refreshToken});

        return tokens;
    }

    private async validateUser(userDto: AuthDto): Promise<User> {
        const user = await this.prisma.user.findUnique({where: {email: userDto.email}});

        if (!user) {
            throw new UnauthorizedException({
                message: 'User is not found',
            });
        }

        const passwordEquals = await bcrypt.compare(userDto.password, user.password);

        if (!passwordEquals) {
            throw new UnauthorizedException({
                message: 'Incorrect password',
            });
        }

        return user;
    }

    private async getTokens(user: User): Promise<TokensDto> {
        const payload = {id: user.id, email: user.email};

        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}s`,
        });

        const refreshToken = this.jwtService.sign(
            {},
            {
                secret: process.env.JWT_REFRESH_TOKEN_SECRET,
                expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME}s`,
            },
        );

        return {accessToken, refreshToken};
    }
}

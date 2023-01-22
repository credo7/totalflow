import {AuthDto} from 'auth/dto/auth.dto';

import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';

import {AuthService} from './auth.service';
import {GetUser} from './decorator';
import {RefreshBodyDto, TokensDto} from './dto';
import {JwtGuard} from './guard';

@ApiTags('Authorization')
@Controller('v1/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Login'})
    @ApiResponse({status: 200, type: TokensDto})
    @HttpCode(HttpStatus.OK)
    @Post('/login')
    login(@Body() authDto: AuthDto) {
        return this.authService.login(authDto);
    }

    @ApiOperation({summary: 'Register'})
    @ApiResponse({status: 201, type: TokensDto})
    @HttpCode(HttpStatus.CREATED)
    @Post('/register')
    register(@Body() authDto: AuthDto) {
        return this.authService.register(authDto);
    }

    @ApiOperation({summary: 'Refresh token'})
    @ApiResponse({status: 200, type: TokensDto})
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtGuard)
    @Post('/refresh')
    refresh(@Body() {refreshToken}: RefreshBodyDto, @GetUser('id') id: number) {
        return this.authService.refresh({id, oldRefreshToken: refreshToken});
    }

    // eslint-disable-next-line class-methods-use-this
    @Get('google')
    @UseGuards(AuthGuard('google'))
    google() {
        return 0;
    }

    // eslint-disable-next-line class-methods-use-this
    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req: Request & {user: TokensDto}) {
        return req?.user;
    }
}

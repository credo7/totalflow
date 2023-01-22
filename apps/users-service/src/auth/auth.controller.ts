import {AuthDto} from 'auth/dto/auth.dto';

import {Body, Controller, HttpCode, HttpStatus, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';

import {AuthService} from './auth.service';
import {GetUser} from './decorator';
import {TokensDto} from './dto';
import {JwtGuard} from './guard';
import type {RefreshBody} from './types';

@ApiTags('Authorization')
@Controller('auth')
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
    refresh(@Body() {refreshToken}: RefreshBody, @GetUser('id') id: number) {
        return this.authService.refresh({id, oldRefreshToken: refreshToken});
    }
}

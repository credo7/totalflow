import {CreateUserDto} from 'users/dto/create-user.dto';

import {Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';

import {AuthService} from './auth.service';
import {TokensDto} from './dto/tokens.dto';
import {JwtAuthGuard} from './jwt-auth.guard';
import type {RefreshBody, RefreshRequest} from './types';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Login'})
    @ApiResponse({status: 200, type: TokensDto})
    @HttpCode(HttpStatus.OK)
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @ApiOperation({summary: 'Registration'})
    @ApiResponse({status: 201, type: TokensDto})
    @HttpCode(HttpStatus.CREATED)
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }

    @ApiOperation({summary: 'Refresh token'})
    @ApiResponse({status: 200, type: TokensDto})
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard)
    @Post('/refresh')
    refresh(@Body() data: RefreshBody, @Req() req: RefreshRequest) {
        return this.authService.refresh(req.user.id, data.refreshToken);
    }
}

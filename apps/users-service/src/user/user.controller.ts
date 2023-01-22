import {GetUser} from 'auth/decorator';
import {JwtGuard} from 'auth/guard';

import {Body, Controller, Delete, Get, HttpCode, Param, Patch, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';

import {DisableGuard} from './decorator';
import {EditUserDto, GetUserDto} from './dto';
import {UserService} from './user.service';

@ApiTags('Users')
@Controller('v1/users')
export class UserController {
    constructor(private usersService: UserService) {}

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [GetUserDto]})
    @UseGuards(JwtGuard, DisableGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Get user by id'})
    @ApiResponse({status: 200, type: GetUserDto})
    @UseGuards(JwtGuard, DisableGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @ApiOperation({summary: 'Change email by id'})
    @ApiResponse({status: 200, type: GetUserDto})
    @UseGuards(JwtGuard, DisableGuard)
    @Patch(':id')
    editUser(
        @Param('id') urlId: string,
        @GetUser('id') jwtId: number,
        @Body() updateUserDto: EditUserDto,
    ) {
        return this.usersService.editUser({urlId: +urlId, jwtId, updateUserDto});
    }

    @ApiOperation({summary: 'Delete user by id'})
    @ApiResponse({status: 204})
    @HttpCode(204)
    @UseGuards(JwtGuard, DisableGuard)
    @Delete(':id')
    remove(@Param('id') urlId: string, @GetUser('id') jwtId: number) {
        return this.usersService.removeUser({urlId: +urlId, jwtId});
    }
}

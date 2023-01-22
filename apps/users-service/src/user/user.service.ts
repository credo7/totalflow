import {PrismaService} from 'prisma/prisma.service';

import {HttpException, HttpStatus, Injectable} from '@nestjs/common';

import {UpdateUserProps} from './types/user-service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async getAllUsers() {
        return this.prisma.user.findMany({select: {email: true, name: true}});
    }

    async getUserByEmail(email: string) {
        const user = await this.prisma.user.findUnique({
            where: {email},
            select: {email: true, name: true},
        });
        if (!user) throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
        return user;
    }

    async findOne(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {id},
            select: {email: true, name: true},
        });
        if (!user) throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
        return user;
    }

    async editUser({urlId, jwtId, updateUserDto}: UpdateUserProps) {
        if (urlId !== jwtId) throw new HttpException('Not the owner', HttpStatus.BAD_REQUEST);
        const user = await this.prisma.user.update({
            where: {id: jwtId},
            data: updateUserDto,
            select: {email: true, name: true},
        });
        if (!user) throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
        return user;
    }

    async removeUser({urlId, jwtId}: {urlId: number; jwtId: number}) {
        if (urlId !== jwtId) throw new HttpException('Not the owner', HttpStatus.BAD_REQUEST);
        const user = await this.prisma.user.findUnique({where: {id: jwtId}});
        if (!user) throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
        await this.prisma.user.delete({where: {id: jwtId}});
        return {message: 'Success'};
    }
}

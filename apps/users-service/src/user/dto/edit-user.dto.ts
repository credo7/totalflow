import {IsEmail, IsOptional, IsString, MaxLength, MinLength} from 'class-validator';

import {ApiProperty} from '@nestjs/swagger';

export class EditUserDto {
    @ApiProperty({
        example: 'vitaly.credo@gmail.com',
        description: 'User email',
        required: false,
        maxLength: 255,
    })
    @IsEmail()
    @IsOptional()
    @MaxLength(255)
    readonly email?: string;

    @ApiProperty({
        example: 'qwerty123',
        description: 'User password',
        required: false,
        minLength: 7,
        maxLength: 255,
    })
    @IsString()
    @IsOptional()
    @MinLength(7)
    @MaxLength(255)
    readonly password?: string;

    @ApiProperty({
        example: 'Vitaly',
        description: 'User name',
        required: false,
        minLength: 2,
        maxLength: 36,
    })
    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(36)
    readonly name?: string;
}

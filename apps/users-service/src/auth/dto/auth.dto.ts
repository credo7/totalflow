import {IsEmail, IsNotEmpty, MinLength, MaxLength, IsString} from 'class-validator';

import {ApiProperty} from '@nestjs/swagger';

export class AuthDto {
    @ApiProperty({
        example: 'vitaly.credo@gmail.com',
        description: 'User email',
        maxLength: 255,
    })
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    readonly email!: string;

    @ApiProperty({example: 'qwerty123', description: 'User password', maxLength: 255, minLength: 7})
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    @MinLength(7)
    readonly password!: string;
}

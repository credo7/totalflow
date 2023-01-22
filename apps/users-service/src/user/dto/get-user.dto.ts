import {ApiProperty} from '@nestjs/swagger';

export class GetUserDto {
    @ApiProperty({
        example: 'vitaly.credo@gmail.com',
        description: 'Unique email',
    })
    email!: string;

    @ApiProperty({
        example: 'Vitaly',
        description: 'Name',
    })
    name?: string;
}

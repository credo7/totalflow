import {ApiProperty} from '@nestjs/swagger';

export class UserDto {
    @ApiProperty({example: '1', description: 'Unique id'})
    id!: number;

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

import {ApiProperty} from '@nestjs/swagger';

export class RefreshBodyDto {
    @ApiProperty({
        example:
            'Al+pJIFt1Js6NX0CwSEXHFAoXbKmU4Zuw5TDh4mD1CH+j/IB0qmQGIsf19849hDsNIlGGSrAHlIuMRhxFZHXOiIVVWn1UwLAjz84I+HwJQniEoSQ4xV5R1sKY1lWpTdd5u4l3BS23JlGP+odK6SkSPm7JRCQNGeeiFPBEmt/l0/wxgZ1Twxh69hOV8UoYkRpNv/SDs6Y4KUuZUAmx04vt8N61KZ6saffawdglyyCbdokg6qEe5Qas5LL2NJUNFfX',
        description: 'Unique refresh token',
    })
    refreshToken!: string;
}

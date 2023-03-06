import {PrismaModule} from 'prisma/prisma.module';

import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {AuthModule} from './auth/auth.module';
import {UserModule} from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        UserModule,
        AuthModule,
        PrismaModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
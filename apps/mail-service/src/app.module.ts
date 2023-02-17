import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {MailModule} from './mail/mail.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        MailModule,
    ],
})
export class AppModule {}

import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {KafkaModule} from './kafka/kafka.module';
import {MailModule} from './mail/mail.module';
import {WelcomeConsumer} from './welcome.consumer';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        MailModule,
        KafkaModule,
    ],
    providers: [WelcomeConsumer],
})
export class AppModule {}

import {Injectable, OnModuleInit} from '@nestjs/common';

import {ConsumerService} from './kafka/consumer.service';
import {MailService} from './mail/mail.service';

// eslint-disable-next-line prettier/prettier
@Injectable()
export class WelcomeConsumer implements OnModuleInit {
    constructor(
        private readonly consumerService: ConsumerService,
        private readonly mailService: MailService,
    ) {}

    async onModuleInit() {
        await this.consumerService.consume(
            {topic: 'register'},
            {
                eachMessage: async ({message}) => {
                    await this.mailService.sendUserWelcome((message.value || '').toString());
                },
            },
        );
    }
}

import {MailerService} from '@nestjs-modules/mailer';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendUserWelcome(email: string): Promise<void> {
        try {
            await this.mailerService.sendMail({
                to: email,
                from: 'Support Team" <support@example.com>',
                subject: 'Welcome to Nice App!',
                template: 'welcome',
            });
        } catch (err) {
            throw new HttpException('Error with mailer service', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

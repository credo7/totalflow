// eslint-disable-next-line import/no-extraneous-dependencies
import {Strategy, VerifyCallback, Profile} from 'passport-google-oauth20';

import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {PassportStrategy} from '@nestjs/passport';

import {AuthService} from '../auth.service';
import {TokensDto} from '../dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(config: ConfigService, private authService: AuthService) {
        super({
            clientID: config.get('GOOGLE_CLIENT_ID'),
            clientSecret: config.get('GOOGLE_CLIENT_SECRET'),
            callbackURL: 'http://localhost:3000/v1/auth/google/redirect',
            scope: ['profile', 'email'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
    ): Promise<TokensDto> {
        const tokens = await this.authService.findOrCreateUser(profile);
        done(null, tokens);
        return tokens;
    }
}

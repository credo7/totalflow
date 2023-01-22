import {CanActivate, HttpException, HttpStatus, Injectable} from '@nestjs/common';

@Injectable()
export class DisableGuard implements CanActivate {
    // eslint-disable-next-line class-methods-use-this
    canActivate(): boolean {
        throw new HttpException('Request disabled', HttpStatus.BAD_REQUEST);
    }
}

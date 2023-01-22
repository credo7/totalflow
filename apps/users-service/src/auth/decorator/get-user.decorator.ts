import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {User} from '@prisma/client';

type Data = 'email' | 'id' | 'name' | undefined;

export const GetUser = createParamDecorator((data: Data, ctx: ExecutionContext) => {
    const request: Express.Request & {user?: User} = ctx.switchToHttp().getRequest();
    if (data) {
        return request?.user?.[data];
    }
    return request?.user;
});

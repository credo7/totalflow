import {UserDto} from 'user/dto/user.dto';

export interface RefreshBody {
    refreshToken: string;
}

export interface RefreshRequest {
    user: UserDto;
}

export interface UpsertUserRefreshTokenProps {
    id: number;
    refreshToken: string;
}

export interface RefreshProps {
    id: number;
    oldRefreshToken: string;
}

import {User} from 'users/users.model';

export interface RefreshBody {
    refreshToken: string;
}

export interface RefreshRequest {
    user: User;
}

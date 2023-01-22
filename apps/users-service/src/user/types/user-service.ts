import {EditUserDto} from 'user/dto';

export interface UpdateUserProps {
    urlId: number;
    jwtId: number;
    updateUserDto: EditUserDto;
}

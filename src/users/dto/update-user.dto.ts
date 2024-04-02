import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    uid_user: string;
    email: string;
    phone: number;
    name: string;
    major: string;
    current_semester: number;
    user_role: string;
    proyect_id_mongo: string;
}

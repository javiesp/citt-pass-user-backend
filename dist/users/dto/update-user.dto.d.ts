import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    uid_user: string;
    email: string;
    phone: number;
    name: string;
    hashed_password: string;
    run: string;
    proyect_id: number;
}
export {};

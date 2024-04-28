import { CreateUserDto } from './create-user.dto';
declare const UpdateUserPasswordDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserPasswordDto extends UpdateUserPasswordDto_base {
    hashed_password: string;
}
export {};

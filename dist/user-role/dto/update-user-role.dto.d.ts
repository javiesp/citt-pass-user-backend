import { CreateUserRoleDto } from './create-user-role.dto';
declare const UpdateUserRoleDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserRoleDto>>;
export declare class UpdateUserRoleDto extends UpdateUserRoleDto_base {
    user_role_id: number;
    role_id: number;
    uid_user: string;
    user_role: string[];
    user_major: string;
    user_permissions: string[];
    major_school: string;
    current_semester: number;
}
export {};

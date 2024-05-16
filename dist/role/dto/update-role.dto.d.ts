import { CreateRoleDto } from './create-role.dto';
declare const UpdateRoleDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRoleDto>>;
export declare class UpdateRoleDto extends UpdateRoleDto_base {
    role_id: number;
    role_name: string;
}
export {};

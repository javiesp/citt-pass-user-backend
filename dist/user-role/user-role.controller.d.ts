import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
export declare class UserRoleController {
    private readonly userRoleService;
    constructor(userRoleService: UserRoleService);
    create(createUserRoleDto: CreateUserRoleDto): Promise<import("src/user-role/entities/user-role.entity").UserRole>;
    findAll(): Promise<import("src/user-role/entities/user-role.entity").UserRole[]>;
    findOne(id: string): Promise<import("src/user-role/entities/user-role.entity").UserRole>;
    updateUserRole(payload: any): Promise<import("src/user-role/entities/user-role.entity").UserRole>;
    remove(id: string): Promise<import("src/user-role/entities/user-role.entity").UserRole>;
}

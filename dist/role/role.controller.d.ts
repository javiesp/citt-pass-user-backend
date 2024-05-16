import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<import("src/role/entities/role.entity").Role>;
    findAll(): Promise<import("src/role/entities/role.entity").Role[]>;
    findOne(id: string): Promise<import("src/role/entities/role.entity").Role>;
    updateRole(payload: any): Promise<import("src/role/entities/role.entity").Role>;
    remove(id: string): Promise<import("src/role/entities/role.entity").Role>;
}

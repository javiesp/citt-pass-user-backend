import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: any): Promise<import("src/users/entities/user.entity").User>;
    findAll(query: any): Promise<import("src/users/entities/user.entity").User[]>;
    findOne(id: string): Promise<import("src/users/entities/user.entity").User>;
    updateUser(payload: any): Promise<import("src/users/entities/user.entity").User>;
    updateUserPassword(payload: any): Promise<import("src/users/entities/user.entity").User>;
    remove(id: string): Promise<import("src/users/entities/user.entity").User>;
}

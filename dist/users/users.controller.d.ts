import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<import("src/users/entities/user.entity").User>;
    findAll(): Promise<import("src/users/entities/user.entity").User[]>;
    findOne(id: string): Promise<import("src/users/entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("src/users/entities/user.entity").User>;
    remove(id: string): Promise<import("src/users/entities/user.entity").User>;
}

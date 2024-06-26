/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateUserDto, LoginAuthDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    userLogin(loginAuthDto: LoginAuthDto): Promise<boolean>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAllUsers(proyect_id: any): Promise<User[]>;
    findAll(): Promise<User[]>;
    findOneUser(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    updateUserPassword(id: string, updateUserPasswordDto: UpdateUserPasswordDto): Promise<User>;
    removeUser(id: string): Promise<User>;
}

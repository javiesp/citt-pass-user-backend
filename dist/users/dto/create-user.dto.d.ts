export declare class CreateUserDto {
    uid_user: string;
    email: string;
    phone: number;
    name: string;
    hashed_password: string;
    run: string;
    proyect_id: number;
}
export declare class LoginAuthDto {
    email: string;
    hashed_password: string;
}

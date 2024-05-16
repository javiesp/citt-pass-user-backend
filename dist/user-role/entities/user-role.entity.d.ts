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
import { HydratedDocument } from 'mongoose';
export type userDocument = HydratedDocument<UserRole>;
export declare class UserRole {
    user_role_id: number;
    role_id: number;
    uid_user: string;
    user_role: string[];
    user_major: string;
    user_permissions: string[];
    major_school: string;
    current_semester: number;
}
export declare const UserRoleSchema: import("mongoose").Schema<UserRole, import("mongoose").Model<UserRole, any, any, any, import("mongoose").Document<unknown, any, UserRole> & UserRole & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserRole, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserRole>> & import("mongoose").FlatRecord<UserRole> & {
    _id: import("mongoose").Types.ObjectId;
}>;

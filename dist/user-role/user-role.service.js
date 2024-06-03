"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_role_entity_1 = require("./entities/user-role.entity");
const mongoose_2 = require("mongoose");
let UserRoleService = class UserRoleService {
    constructor(userRoleModel) {
        this.userRoleModel = userRoleModel;
    }
    async createUserRole(createUserRoleDto) {
        const createdUserRole = new this.userRoleModel(createUserRoleDto).save();
        console.log(createUserRoleDto);
        return createdUserRole;
    }
    async findAllUserRoles() {
        return await this.userRoleModel.find().exec();
    }
    async findOneUserRole(id) {
        return await this.userRoleModel.findById(id).exec();
    }
    async updateUserRole(id, updateUserRoleDto) {
        return await this.userRoleModel.findByIdAndUpdate(id, updateUserRoleDto, { new: true }).exec();
    }
    async removeUserRole(id) {
        return await this.userRoleModel.findByIdAndDelete(id).exec();
    }
};
exports.UserRoleService = UserRoleService;
exports.UserRoleService = UserRoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_role_entity_1.UserRole.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRoleService);
//# sourceMappingURL=user-role.service.js.map
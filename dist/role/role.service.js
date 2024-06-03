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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const role_entity_1 = require("./entities/role.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let RoleService = class RoleService {
    constructor(roleModel) {
        this.roleModel = roleModel;
    }
    async createRole(createRoleDto) {
        const createdRole = new this.roleModel(createRoleDto).save();
        console.log(createRoleDto);
        return createdRole;
    }
    async findAllRoles() {
        return await this.roleModel.find().exec();
    }
    async findOneRole(id) {
        return await this.roleModel.findById(id).exec();
    }
    async updateRole(id, updateRoleDto) {
        return await this.roleModel.findByIdAndUpdate(id, updateRoleDto, { new: true }).exec();
    }
    async removeRole(id) {
        return await this.roleModel.findByIdAndDelete(id).exec();
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(role_entity_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RoleService);
//# sourceMappingURL=role.service.js.map
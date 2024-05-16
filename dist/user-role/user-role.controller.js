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
exports.UserRoleController = void 0;
const common_1 = require("@nestjs/common");
const user_role_service_1 = require("./user-role.service");
const create_user_role_dto_1 = require("./dto/create-user-role.dto");
const microservices_1 = require("@nestjs/microservices");
let UserRoleController = class UserRoleController {
    constructor(userRoleService) {
        this.userRoleService = userRoleService;
    }
    create(createUserRoleDto) {
        return this.userRoleService.createUserRole(createUserRoleDto);
    }
    findAll() {
        return this.userRoleService.findAllUserRoles();
    }
    findOne(id) {
        return this.userRoleService.findOneUserRole(id);
    }
    updateUserRole(payload) {
        console.log(payload);
        return this.userRoleService.updateUserRole(payload.id, payload.updateUserRoleDto);
    }
    remove(id) {
        return this.userRoleService.removeUserRole(id);
    }
};
exports.UserRoleController = UserRoleController;
__decorate([
    (0, common_1.Post)('create-user-role'),
    (0, microservices_1.MessagePattern)("createUserRole"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_role_dto_1.CreateUserRoleDto]),
    __metadata("design:returntype", void 0)
], UserRoleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/find-all-user-roles'),
    (0, microservices_1.MessagePattern)("findAllUserRoles"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserRoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/find-one-user-role/:id'),
    (0, microservices_1.MessagePattern)('findOneUserRole'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserRoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/update-user-role/:id'),
    (0, microservices_1.MessagePattern)('updateUserRole'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserRoleController.prototype, "updateUserRole", null);
__decorate([
    (0, common_1.Delete)('/delete-user-role/:id'),
    (0, microservices_1.MessagePattern)('removeUserRole'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserRoleController.prototype, "remove", null);
exports.UserRoleController = UserRoleController = __decorate([
    (0, common_1.Controller)('user-role'),
    __metadata("design:paramtypes", [user_role_service_1.UserRoleService])
], UserRoleController);
//# sourceMappingURL=user-role.controller.js.map
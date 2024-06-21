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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const microservices_1 = require("@nestjs/microservices");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    loginUser(loginAuthDto) {
        console.log('wtf', loginAuthDto);
        return this.usersService.userLogin(loginAuthDto);
    }
    createUser(createUserDto) {
        console.log("pasa por aca");
        return this.usersService.createUser(createUserDto);
    }
    findAllUsers(query) {
        const usersData = this.usersService.findAllUsers(query.project_id);
        console.log("servicio ejecutando", query.project_id);
        console.log('soy la query', query);
        return usersData;
    }
    findAll() {
        const usersData = this.usersService.findAll();
        return usersData;
    }
    findOne(id) {
        return this.usersService.findOneUser(id);
    }
    updateUser(payload) {
        console.log(payload);
        return this.usersService.updateUser(payload.id, payload.updateUserDto);
    }
    updateUserPassword(payload) {
        console.log(payload);
        return this.usersService.updateUserPassword(payload.id, payload.updateUserDto);
    }
    remove(id) {
        return this.usersService.removeUser(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('/login'),
    (0, microservices_1.MessagePattern)('loginUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Post)('/create-user'),
    (0, microservices_1.MessagePattern)('createUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)("/find-users-by-project"),
    (0, microservices_1.MessagePattern)("findAllUsers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Get)('/find-all-users'),
    (0, microservices_1.MessagePattern)("findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/find-one-user/:id'),
    (0, microservices_1.MessagePattern)('findOneUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/update-user/:id'),
    (0, microservices_1.MessagePattern)('updateUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Patch)('/update-user-password/:id'),
    (0, microservices_1.MessagePattern)('updateUserPassword'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUserPassword", null);
__decorate([
    (0, common_1.Delete)('/delete-user/:id'),
    (0, microservices_1.MessagePattern)('removeUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map
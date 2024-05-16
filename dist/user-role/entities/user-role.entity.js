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
exports.UserRoleSchema = exports.UserRole = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let UserRole = class UserRole {
};
exports.UserRole = UserRole;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], UserRole.prototype, "user_role_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], UserRole.prototype, "role_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserRole.prototype, "uid_user", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], UserRole.prototype, "user_role", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserRole.prototype, "user_major", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], UserRole.prototype, "user_permissions", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserRole.prototype, "major_school", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], UserRole.prototype, "current_semester", void 0);
exports.UserRole = UserRole = __decorate([
    (0, mongoose_1.Schema)()
], UserRole);
exports.UserRoleSchema = mongoose_1.SchemaFactory.createForClass(UserRole);
//# sourceMappingURL=user-role.entity.js.map
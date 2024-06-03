import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post('create-user-role')
  @MessagePattern("createUserRole")// se comunica con la api por medio de message pattern
  create(@Body() createUserRoleDto: CreateUserRoleDto) {
    return this.userRoleService.createUserRole(createUserRoleDto);
  }

  @Get('/find-all-user-roles')
  @MessagePattern("findAllUserRoles")
  findAll() {
    return this.userRoleService.findAllUserRoles();
  }

  @Get('/find-one-user-role/:id') 
  @MessagePattern('findOneUserRole')
  findOne(id: string) {
    return this.userRoleService.findOneUserRole(id);
  }

  @Put('/update-user-role/:id')
  @MessagePattern('updateUserRole')
  updateUserRole(payload) { 
    console.log(payload) 
    return this.userRoleService.updateUserRole(payload.id, payload.updateUserRoleDto);
  }

  @Delete('/delete-user-role/:id')
  @MessagePattern('removeUserRole')
  remove(id: string) {
    return this.userRoleService.removeUserRole(id);
  }
}

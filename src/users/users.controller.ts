import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create-user')
  @MessagePattern('createUser')
  createUser(createUserDto) {
    console.log("pasa por aca")
    return this.usersService.createUser(createUserDto);
  }
// funcion de ejemplo 
  @Get('/find-all-users')
  @MessagePattern("findAllUsers")// se comunica con la api por medio de message pattern
  findAll(proyect_id) { // recoge los parametro enviados 
    const usersData = this.usersService.findAllUsers(proyect_id);
    console.log("servicio ejecutando", proyect_id)
    return usersData;
  }

  @Get('/find-one-user/:id') 
  @MessagePattern('findOneUser')
  findOne(id: string) {
    return this.usersService.findOneUser(id);
  }

  @Patch('/update-user/:id')
  @MessagePattern('updateUser')
  updateUser(payload) { 
    console.log(payload) 
    return this.usersService.updateUser(payload.id, payload.updateUserDto);
  }

  @Delete('/delete-user/:id')
  @MessagePattern('removeUser')
  remove(id: string) {
    return this.usersService.removeUser(id);
  }
}

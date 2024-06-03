import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  @MessagePattern('loginUser')
  loginUser(loginAuthDto) { 
    return this.usersService.userLogin(loginAuthDto);
  }

  @Post('/create-user')
  @MessagePattern('createUser') // micropserv
  createUser(createUserDto) { // parametro
    console.log("pasa por aca")
    return this.usersService.createUser(createUserDto);
  }
// funcion de ejemplo 
  @Get('/find-all-users')
  @MessagePattern("findAllUsers")// cam biar nombre 
  findAll(query) { // recoge los parametro enviados 
    const usersData = this.usersService.findAllUsers(query.project_id);
    console.log("servicio ejecutando", query.project_id)
    console.log('soy la query',query)
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

  @Patch('/update-user-password/:id')
  @MessagePattern('updateUserPassword')
  updateUserPassword(payload) { 
    console.log(payload) 
    return this.usersService.updateUserPassword(payload.id, payload.updateUserDto);
  }

  @Delete('/delete-user/:id')
  @MessagePattern('removeUser')
  remove(id: string) {
    return this.usersService.removeUser(id);
  }
}

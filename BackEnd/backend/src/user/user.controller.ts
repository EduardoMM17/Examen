import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserCredentialsDto } from './dto/user-credentials.dto';   
import { User } from './user.entity';
import { UserService } from './user.service'; 
import { Logger } from '@nestjs/common';

@Controller('/api/user')
export class UserController {

    constructor(
        private userService: UserService,
    ) {}

  @Post('/create')
  async createUser(@Body() userCredentialsDto: UserCredentialsDto): Promise<string>{
      return this.userService.createUser(userCredentialsDto);
  }
  
}

import { Controller, Get, Body, Post, Param, UseGuards, Put, Req, Delete } from '@nestjs/common';
import { UserCredentialsDto } from './dto/user-credentials.dto';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Logger } from '@nestjs/common';
import { ResCreateUserDto } from './dto/res-create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from './auth-user.decorator';
import { JwtService } from '@nestjs/jwt';

@Controller('/api/user')
export class UserController {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  @ApiOperation({ title: 'Create user' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post('/create')
  async createUser(@Body() userCredentialsDto: UserCredentialsDto, @Req() req): Promise<ResCreateUserDto> {
    const authorizationHeaders = req.headers.authorization;
    return await this.userService.createUser(userCredentialsDto, authorizationHeaders);
  }

  @ApiOperation({ title: 'Get user' })
  @ApiBearerAuth()
  @Get('/get-user/:email')
  @UseGuards(AuthGuard())
  async getUser(@Param('email') email: string): Promise<User> {
    return await this.userService.getUser(email);
  }

  @ApiOperation({ title: 'Update user' })
  @ApiBearerAuth()
  @Put('/update-user')
  @UseGuards(AuthGuard())
  async updateUser(@Body() Body) {
    return await this.userService.updateUser(Body.email, Body.update);
  }

  @ApiOperation({ title: 'Delete user' })
  @ApiBearerAuth()
  @Delete('/delete-user/:email')
  @UseGuards(AuthGuard())
  async deleteUser(@Param('email') email: string, @Req() req) {
    const authorizationHeaders = req.headers.authorization;
    return await this.userService.deleteUser(email, authorizationHeaders);
  }

  @ApiOperation({ title: 'Get All users' })
  @ApiBearerAuth()
  @Get('/get-all-users')
  @UseGuards(AuthGuard())
  async getAllUsers(@Req() req): Promise<User[]> {
    const authorizationHeaders = req.headers.authorization;
    return await this.userService.getAllUsers(authorizationHeaders);
  }
}

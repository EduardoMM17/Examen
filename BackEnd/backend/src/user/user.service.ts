import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCredentialsDto } from './dto/user-credentials.dto';
import { User } from './user.entity';
import { JwtPayload } from './jwt-payload.interface';
import { ResCreateUserDto } from './dto/res-create-user.dto';
import { Roles } from './roles.enum';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>, private jwtService: JwtService) {}

  async createUser(userCredentialsDto: UserCredentialsDto, authorizationHeaders): Promise<ResCreateUserDto> {
    const { email, firstName, lastName, telephone, role } = userCredentialsDto;
    const token = authorizationHeaders.split(' ')[1];
    let payload = JSON.stringify(this.jwtService.decode(token));
    let payloadParsed = JSON.parse(payload);

    if (payloadParsed.role === Roles.ADMIN) {
      let user = this.userRepository.create({
        email,
        firstName,
        lastName,
        telephone,
        role,
      });

      const payload: JwtPayload = { email, firstName, lastName, telephone, role };
      const jwtToken = await this.jwtService.sign(payload);
      user.token = jwtToken;
      await this.userRepository.save(user);
      const resCreateUserDto: ResCreateUserDto = {
        token: jwtToken,
      };
      return resCreateUserDto;
    }

    throw new UnauthorizedException('Only ADMIN users can use this method.');
  }

  async getUser(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ _id: new ObjectId(id) });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async updateUser(id: string, update) {
    return await this.userRepository.update({ _id: new ObjectId(id) }, update);
  }

  async deleteUser(id: string, authorizationHeaders) {
    const token = authorizationHeaders.split(' ')[1];
    let payload = JSON.stringify(this.jwtService.decode(token));
    let payloadParsed = JSON.parse(payload);
    if (payloadParsed.role === Roles.ADMIN) {
      return await this.userRepository.delete({ _id: new ObjectId(id) });
    }

    throw new UnauthorizedException('Only ADMIN users can use this method.');
  }

  async getAllUsers(authorizationHeaders): Promise<User[]> {
    const token = authorizationHeaders.split(' ')[1];
    let payload = JSON.stringify(this.jwtService.decode(token));
    let payloadParsed = JSON.parse(payload);
    if (payloadParsed.role === Roles.ADMIN) {
      return await this.userRepository.find();
    }

    throw new UnauthorizedException('Only ADMIN users can use this method.');
  }
}

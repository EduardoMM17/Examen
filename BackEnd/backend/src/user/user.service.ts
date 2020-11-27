import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCredentialsDto } from './dto/user-credentials.dto';
import { User } from './user.entity';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService,
    ){}

    async createUser( userCredentialsDto: UserCredentialsDto): Promise<string> {
        const { email, firstName, lastName, telephone } = userCredentialsDto;
        let user = this.userRepository.create({
            email,
            firstName,
            lastName,
            telephone
        })

        const payload: JwtPayload = { email, firstName, lastName, telephone};
        const jwtToken = await this.jwtService.sign(payload);
        user.token = jwtToken;
        const savedUser = await this.userRepository.save(user);
        return jwtToken;
    }


}

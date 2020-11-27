import { IsNumber, IsString } from 'class-validator';

export class UserCredentialsDto {

    @IsString()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsNumber()
    telephone: string;
    
}
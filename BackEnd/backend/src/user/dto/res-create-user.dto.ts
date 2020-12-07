import { ApiResponseModelProperty } from '@nestjs/swagger';


export class ResCreateUserDto {

    @ApiResponseModelProperty()
    token: string;
}
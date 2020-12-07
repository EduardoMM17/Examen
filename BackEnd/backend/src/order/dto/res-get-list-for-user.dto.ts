import * as interfaces from '../interfaces/all.interface';
import { ApiResponseModelProperty } from '@nestjs/swagger';

export class ResGetListForUserDto {

    @ApiResponseModelProperty()
    usuario: interfaces.UserForOrder;

    @ApiResponseModelProperty()
    orders: interfaces.OrderInfo[];
}
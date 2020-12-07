import { ApiResponseModelProperty } from '@nestjs/swagger';

export class ResCreateOrderDto {

    @ApiResponseModelProperty()
    idOrder: string;

    @ApiResponseModelProperty()
    orderNumber: string;
}
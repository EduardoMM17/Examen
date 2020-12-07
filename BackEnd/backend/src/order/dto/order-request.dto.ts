import { ApiModelProperty } from '@nestjs/swagger';

export class item {

    @ApiModelProperty()
    idItem: string;
    
    @ApiModelProperty()
    quantity: number;
}

export class OrderRequestDto {    
    @ApiModelProperty()
    token: string;

    @ApiModelProperty({ type: [item]})
    items: item[]; 
}


import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderRequestDto } from './dto/order-request.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { ResCreateOrderDto } from './dto/res-create-order.dto';
import { ResGetListForUserDto } from './dto/res-get-list-for-user.dto';

@Controller('/api/order')
export class OrderController {
    constructor(
        private orderService: OrderService
    ){}

    @ApiOperation({ title: 'Create order' })
    @Post('/create')
    async createOrder(@Body() orderRequestDto: OrderRequestDto): Promise<ResCreateOrderDto> {
        return await this.orderService.createOrder(orderRequestDto);
    }

    @ApiOperation({ title: 'Get list of orders' })
    @Get('/list-for-user/:token')
    async getListForUser(@Param('token') token: string): Promise<ResGetListForUserDto>{
        return await this.orderService.getListForUser(token);
    }
}


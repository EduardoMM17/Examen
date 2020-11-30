import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderRequestDto } from './dto/order-request.dto';
import { OrderService } from './order.service';

@Controller('/api/order')
export class OrderController {
    constructor(
        private orderService: OrderService
    ){}

    @Post('/create')
    async createOrder(@Body() orderRequestDto: OrderRequestDto) {
        return this.orderService.createOrder(orderRequestDto); 
    }

    @Get('/list-for-user/:token')
    async getListForUser(@Param('token') token: string){
        return this.orderService.getListForUser(token);
    }
}

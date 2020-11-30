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
        const res = await this.orderService.createOrder(orderRequestDto)
        return {res}; 
    }

    @Get('/list-for-user/:token')
    async getListForUser(@Param('token') token: string){
        return this.orderService.getListForUser(token);
    }
}

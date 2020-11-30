import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { OrderRequestDto } from './dto/order-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Order } from '../order/order.entity';
import { Repository } from 'typeorm';
import { UserForOrder, OrderInfo, Item } from './interfaces/all.interface';
import { v4 as uuid} from 'uuid';
import * as moment from 'moment';

const itemsArray = require('../../../items.json');

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Order) private orderRepository: Repository<Order>,
    ) {}

    async createOrder(orderRequestDto: OrderRequestDto) {
        const { token, items } = orderRequestDto;
        const userFound = await this.userRepository.findOne({token});
        if(!userFound){
            throw new UnauthorizedException('Invalid credentials');
        }

        const userForOrder: UserForOrder = {
            idUsuario: userFound._id.toString(),
            email: userFound.email,
            telephone: userFound.telephone,
        }

        let itemInfo;
        let itemOrderArray: Item[] = [];
        for(let i = 0; i < items.length; i++){
            itemInfo = itemsArray.find(element => items[i].idItem === element.idItem.oid);
            itemInfo.quantity = items[i].quantity;
            itemOrderArray.push(itemInfo);
        }

        const ordersInfoStored = await this.orderRepository.findOne({'usuario': userForOrder});
        let orderNumber: number;
        let ordersInfoCreation: number;

        if(!ordersInfoStored){
            orderNumber = 0;
            ordersInfoCreation = moment.utc().unix();
        } else {
            orderNumber = ordersInfoStored.orders.length++;
        }

        const orderInfo: OrderInfo = {
            idOrder: uuid(),
            orderNumber,
            createdAt: moment.utc().unix(),
            items: itemOrderArray,
        }

        let order = this.orderRepository.create({
            usuario: userForOrder,
            orders: [orderInfo],
            createdAt: ordersInfoCreation,
        })

        await this.orderRepository.save(order);

        return {idOrder: uuid(), orderNumber: orderNumber.toString()};
    }

    async getListForUser(token: string){
        const userFound = await this.userRepository.findOne({token});
        if(!userFound){
            throw new UnauthorizedException('Invalid credentials');
        }
        const userForOrder: UserForOrder = {
            idUsuario: userFound._id.toString(),
            email: userFound.email,
            telephone: userFound.telephone,
        }

        const ordersInfoStored = await this.orderRepository.findOne({'usuario': userForOrder});
        const orders = ordersInfoStored.orders;

        return { usuario: userForOrder, orders};

    }

}

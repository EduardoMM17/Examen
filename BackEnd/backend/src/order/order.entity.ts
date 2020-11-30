import { Column, Entity, Index, ObjectIdColumn, Unique } from 'typeorm';
import { UserForOrder, OrderInfo, Item } from './interfaces/all.interface';

@Entity()
export class Order {
    @ObjectIdColumn()
    _id: string;

    @Column()
    usuario: UserForOrder;

    @Column()
    orders: OrderInfo[];

    @Column()
    createdAt: number;

    @Column()
    updatedAt: number;

}
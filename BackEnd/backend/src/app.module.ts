import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/examen',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [User, Order],
    }),
    UserModule,
    OrderModule
  ]
})
export class AppModule {}

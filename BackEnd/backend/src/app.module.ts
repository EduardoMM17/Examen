import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.entity';
import { ConfigModule } from '@nestjs/config';


//Colocar las credenciales de base de datos en variables de entorno. Revisar configuración de NestJS
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_URL,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [User, Order],
    }),
    UserModule,
    OrderModule,
    ConfigModule.forRoot()
  ]
})
export class AppModule {}

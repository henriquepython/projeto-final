import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/auth/entities/auth.entity';
import { OrderProfile } from './mapper/orderProfile';
import { OrderRepository } from './order.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Auth])],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, OrderProfile],
})
export class OrderModule {}

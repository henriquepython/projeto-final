import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { BadRequestException, Injectable, Logger, Scope } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderStatus } from './entities/OrderStatus.enum';
import { OrderRepository } from './order.repository';

@Injectable({ scope: Scope.REQUEST })
export class OrderService {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private readonly logger: Logger,
    private readonly repository: OrderRepository,
  ) {
    this.logger = new Logger(OrderService.name);
  }

  async createOrder(orderModel: CreateOrderDto) {
    return this.repository.createOrder(orderModel);
  }

  async listOrdersByUser(user: string) {
    return await this.repository.listOrdersByUser(user);
  }

  async cancelledOrderByUser(orderId: string) {
    return this.repository.cancelledOrderByUser(orderId);
  }

  async completedOrderByUser(orderId: string) {
    return this.repository.completedOrderByUser(orderId);
  }

  async remove(orderId: string) {
    return this.repository.remove(orderId);
  }

  async findAll() {
    return await this.repository.findAll();
  }
}

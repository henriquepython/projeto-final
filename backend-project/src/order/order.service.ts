import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
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

  async findAll() {
    return await this.repository.findAll();
  }
}

import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
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

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const orderMapper = this.mapper.map(createOrderDto, CreateOrderDto, Order);

    return this.repository.createOrder(orderMapper, orderMapper.user);
  }

  async listOrdersByUser(user: string) {
    return await this.repository.listOrdersByUser(user);
  }

  async findAll() {
    return await this.repository.findAll();
  }
}

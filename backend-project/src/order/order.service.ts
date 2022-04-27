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

  async CancelledOrderByUser(id: string, updateOrderDto: UpdateOrderDto) {
    this.logger.log(`looking for order with id: ${id}`);
    const orderMapper = this.mapper.map(updateOrderDto, CreateOrderDto, Order);
    const order = await this.repository.findById(id);

    if (!order) {
      this.logger.error(`there is no order with the id: ${id}`);
      throw new BadRequestException('order not found');
    }

    orderMapper.status = OrderStatus.Cancelled;

    this.logger.log('order found');
    this.logger.log('updated order ');
    this.repository.update(id, orderMapper);

    return orderMapper;
  }

  async CompletedOrderByUser(id: string, updateOrderDto: UpdateOrderDto) {
    this.logger.log(`looking for order with id: ${id}`);
    const orderMapper = this.mapper.map(updateOrderDto, CreateOrderDto, Order);
    const order = await this.repository.findById(id);

    if (!order) {
      this.logger.error(`there is no order with the id: ${id}`);
      throw new BadRequestException('order not found');
    }

    orderMapper.status = OrderStatus.Completed;

    this.logger.log('order found');
    this.logger.log('updated order ');
    this.repository.update(id, orderMapper);

    return orderMapper;
  }

  async cancelledOrderByAdmin(id: string) {
    this.logger.log(`looking for order with id: ${id}`);
    const order = await this.repository.findById(id);

    if (!order) {
      this.logger.error(`there is no order with the id: ${id}`);
      throw new BadRequestException('order not found');
    }

    this.logger.log('order found');
    this.logger.log('order removed');
    this.repository.remove(id);

    return `order with id: ${id} successfully cancelled `;
  }

  async findAll() {
    return await this.repository.findAll();
  }
}

import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { BadRequestException, Injectable, Logger, Scope } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
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

  async create(createOrderDto: CreateOrderDto) {
    this.logger.log('created order');
    const orderMapper = this.mapper.map(createOrderDto, CreateOrderDto, Order);
    return await this.repository.create(orderMapper);
  }

  async findAll(): Promise<CreateOrderDto[]> {
    this.logger.log('Looking for all orders');
    const order = await this.repository.findAll();

    if (!order) {
      this.logger.error('Error fetching orders');
      throw new BadRequestException('orders not found');
    }

    this.logger.log('orders found');
    return order;
  }

  async findById(id: string) {
    this.logger.log(`looking for order with id: ${id}`);
    const order = await this.repository.findByName(id);

    if (!order) {
      this.logger.error(`there is no order with the name: ${name}`);
      throw new BadRequestException('order not found');
    }

    this.logger.log('order found');
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    this.logger.log(`looking for order with id: ${id}`);
    const orderMapper = this.mapper.map(updateOrderDto, UpdateOrderDto, Order);
    const order = await this.repository.findById(id);

    if (!order) {
      this.logger.error(`there is no order with the id: ${id}`);
      throw new BadRequestException('order not found');
    }

    this.logger.log('order found');
    this.logger.log('updated order ');
    this.repository.update(id, orderMapper);

    return orderMapper;
  }

  async remove(id: string) {
    this.logger.log(`looking for orders with id: ${id}`);
    const order = await this.repository.findById(id);

    if (!order) {
      this.logger.error(`there is no order with the id: ${id}`);
      throw new BadRequestException('order not found');
    }

    this.logger.log('order found');
    this.logger.log('order removed');
    this.repository.remove(id);

    return `order with id: ${id} successfully removed `;
  }
}

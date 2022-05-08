import { BadRequestException, Injectable, Logger, Scope } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { CartService } from 'src/cart/cart.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderStatus } from '../shared/enum/OrderStatus.enum';
import { OrderRepository } from './order.repository';

@Injectable({ scope: Scope.REQUEST })
export class OrderService {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private readonly logger: Logger,
    private readonly repository: OrderRepository,
    private readonly cartService: CartService,
  ) {
    this.logger = new Logger(OrderService.name);
  }

  async createOrder(orderModel: CreateOrderDto): Promise<CreateOrderDto> {
    const orderMapper = this.mapper.map(orderModel, CreateOrderDto, Order);

    this.logger.log(
      `searching all products in the user's cart: ${orderMapper.userId}`,
    );
    orderMapper.products = await this.cartService.findCartByUser(
      orderMapper.userId,
    );

    const { _id } = await this.repository.create(orderMapper);
    let order = await this.repository.findPopulateProducts(_id);

    this.logger.log('calculating the order total');
    const totalPrice = order.products.reduce((acc, product) => {
      const total = product.price * product.quantity;
      return acc + total;
    }, 0);
    await order.update({ totalPrice });

    order = await this.repository.findPopulateUserProducts(_id);
    this.logger.log('order created');
    await order.save();
    await this.cartService.removeAllCart(orderMapper.userId);

    return order;
  }

  async listOrdersByUser(userId: string): Promise<CreateOrderDto[]> {
    this.logger.log(`looking for order with user: ${userId}`);
    const orders = await this.repository.findPopulateUserIdProducts(userId);

    if (!orders) {
      this.logger.error(`there is no order with the user: ${userId}`);
      throw new BadRequestException('No Orders Found');
    }

    this.logger.log('user found');
    return orders;
  }

  async cancelledOrderByUser(orderId: string): Promise<CreateOrderDto> {
    this.logger.log(`looking for order with id: ${orderId}`);
    const order = await this.repository.findOneUserId(orderId);

    if (!order) {
      this.logger.error(`there is no order with the id: ${orderId}`);
      throw new BadRequestException('order not found');
    }

    this.logger.log('order found');
    return order.updateOne({ status: OrderStatus.Cancelled });
  }

  async RequestCancelledOrderByUser(orderId: string): Promise<CreateOrderDto> {
    this.logger.log(`looking for order with id: ${orderId}`);
    const order = await this.repository.findOneUserId(orderId);

    if (!order) {
      this.logger.error(`there is no order with the id: ${orderId}`);
      throw new BadRequestException('order not found');
    }

    this.logger.log('order found');
    return order.updateOne({ status: OrderStatus.RequestCancelled });
  }

  async completedOrderByUser(orderId: string): Promise<CreateOrderDto> {
    this.logger.log(`looking for order with id: ${orderId}`);
    const order = await this.repository.findOneUserId(orderId);

    if (!order) {
      this.logger.error(`there is no order with the id: ${orderId}`);
      throw new BadRequestException('order not found');
    }

    this.logger.log('order found');
    return order.updateOne({ status: OrderStatus.Completed });
  }

  async remove(orderId: string): Promise<void> {
    this.logger.log(`looking for order with id: ${orderId}`);
    const order = await this.repository.findById(orderId);

    if (!order) {
      this.logger.error(`there is no order with the id: ${orderId}`);
      throw new BadRequestException('order not found');
    }

    this.logger.log('order found');
    this.logger.log('order removed');
    return this.repository.remove(orderId);
  }

  async findAll(): Promise<CreateOrderDto[]> {
    this.logger.log('Looking for all orders');
    const order = await this.repository.findAll();

    if (!order) {
      this.logger.error('Error fetching orders');
      throw new BadRequestException('orders not found');
    }

    this.logger.log('orders found');
    return await this.repository.findAll();
  }
}

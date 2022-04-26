import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

  async listOrdersByUser(userId: string) {
    const orders = await this.orderModel
      .find({ user: userId })
      .populate('user')
      .populate('products.product');

    if (!orders) {
      throw new HttpException('No Orders Found', HttpStatus.NO_CONTENT);
    }
    return orders;
  }

  async createOrder(orderModel: CreateOrderDto, userId: string) {
    const createOrder = {
      user: userId,
      products: orderModel.products,
    };
    const { _id } = await this.orderModel.create(createOrder);
    let order = await this.orderModel
      .findById(_id)
      .populate('products.product');

    order = await this.orderModel
      .findById(_id)
      .populate('userId')
      .populate('products.product');
    return order;
  }

  async findAll() {
    return await this.orderModel.find();
  }
}

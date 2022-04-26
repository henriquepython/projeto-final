import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

  async listOrdersByUser(user: string) {
    const orders = await this.orderModel
      .find({ user: user })
      .populate('user')
      .populate('products.product');

    if (!orders) {
      throw new HttpException('No Orders Found', HttpStatus.NO_CONTENT);
    }
    return orders;
  }

  async findAll() {
    return await this.orderModel.find();
  }
}

import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(@InjectModel('Product') private orderModel: Model<Order>) {}

  async createOrder(orders: Order, user: string) {
    const createOrder = {
      user: user,
      products: [...orders.products],
    };
    const { _id } = await this.orderModel.create(createOrder);
    let order = await this.orderModel
      .findById(_id)
      .populate('products.product');

    const totalPrice = order.products.reduce((acc, product) => {
      const price = product.price * product.quantity;
      return acc + price;
    }, 0);
    await order.update({ totalPrice });

    order = await this.orderModel
      .findById(_id)
      .populate('user')
      .populate('products.product');
    return order;
  }

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

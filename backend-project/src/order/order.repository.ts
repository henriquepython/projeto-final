import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(@InjectModel('Product') private orderModel: Model<Order>) {}

  async create(order: Order): Promise<Order> {
    const products = await this.orderModel.create({
      ...order,
      user: order.user,
      product: order.product,
    });
    await products.save();
    return products.populate('user');
  }

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().populate('user');
  }

  async findById(id: string): Promise<Order> {
    return await this.orderModel.findById(id).populate('user');
  }

  async findByName(name: string): Promise<Order> {
    return await this.orderModel.findById({ title: name }).populate('user');
  }

  async update(id: string, Product: Order): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(
      { _id: id },
      { $set: Product },
      { new: true },
    );
  }

  async remove(id: string): Promise<void> {
    await this.orderModel.deleteOne({ _id: id }).exec();
  }

  async listOrdersByUser(userId: string) {
    const orders = await this.orderModel
      .find({ owner: userId })
      .populate('owner')
      .populate('products.product');

    if (!orders) {
      throw new HttpException('No Orders Found', HttpStatus.NO_CONTENT);
    }
    return orders;
  }
}

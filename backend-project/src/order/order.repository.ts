import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

  async create(orderModel: Order) {
    return await this.orderModel.create(orderModel);
  }

  async findPopulateProducts(id: any) {
    return await this.orderModel.findById(id).populate('products');
  }

  async findPopulateUserProducts(id: any) {
    return await this.orderModel
      .findById(id)
      .populate('userId')
      .populate('products');
  }

  async findPopulateUserIdProducts(id: any) {
    return await this.orderModel
      .find({ userId: id })
      .populate('userId')
      .populate('products');
  }

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find();
  }

  async findById(id: string): Promise<Order> {
    return await this.orderModel.findById(id);
  }

  async findOneUserId(id: any) {
    return await this.orderModel.findOne({ _id: id });
  }

  async update(id: string, order: Order): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(
      { _id: id },
      { $set: order },
      { new: true },
    );
  }

  async remove(id: string): Promise<void> {
    await this.orderModel.deleteOne({ _id: id }).exec();
  }
}

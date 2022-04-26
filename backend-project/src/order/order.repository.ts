import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductRepository } from 'src/product/product.repository';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(
    @InjectModel('Order') private orderModel: Model<Order>,
    private readonly productRepository: ProductRepository,
  ) {}

  async createOrder(orders: Order, user: any) {
    const product = await this.productRepository.findById(user);
    orders.total = 0;

    orders.

    orders.products.forEach((e) => {
      e.price = product.price;
      e.quantity = product.quantity;

      e.total = e.quantity * e.price;
      order.total += e.total;
    });
    const createOrder = {
      user: user,
      products: [...orders.products],
    };

    const { _id } = await this.orderModel.create(createOrder);
    let order = await this.orderModel
      .findById(_id)
      .populate('products.product');

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

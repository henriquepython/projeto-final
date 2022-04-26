import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductRepository } from 'src/product/product.repository';
import { Order } from './entities/order.entity';
import { OrderStatus } from './entities/OrderStatus.enum';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(
    @InjectModel('Order') private orderModel: Model<Order>,
    private readonly productRepository: ProductRepository,
  ) {}

  async createOrder(orders: Order, user: any) {
    const createOrder = {
      user: user,
      products: [...orders.products],
    };
    const orderc = new this.orderModel(createOrder);

    const { _id } = orderc;
    const order = await this.orderModel
      .findById(_id)
      .populate('products.product');

    const product = await this.productRepository.findById(user);
    orders.total = 0;

    orders.status = OrderStatus.Pending;

    const totalPrice = orders.products.forEach((e) => {
      e.price = product.price;
      e.quantity = product.quantity;

      e.total = e.quantity * e.price;
      order.total += e.total;
    });

    await order.update({ totalPrice });

    return await orderc.save();
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

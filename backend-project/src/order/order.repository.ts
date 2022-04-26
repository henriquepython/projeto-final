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
    // orders.total = 0;

    // orders.status = OrderStatus.Pending;

    // const totalPrice = orders.products.forEach((e) => {
    //   const product = await this.productRepository.findById(e);
    //   e.price = product.price;
    //   e.quantity = product.quantity;

    //   e.total = e.quantity * e.price;
    //   orders.total += e.total;
    // });

    const createOrder = {
      user: user,
      products: products,
    };
    const order = new this.orderModel(createOrder);

    return await order.save();
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

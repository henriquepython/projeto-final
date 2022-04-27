import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartService } from 'src/cart/cart.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(
    @InjectModel('Order') private orderModel: Model<Order>,
    private readonly cartService: CartService,
  ) {}

  async listOrdersByUser(userId: string) {
    const orders = await this.orderModel
      .find({ user: userId })
      .populate('userId')
      .populate('products.products');

    if (!orders) {
      throw new HttpException('No Orders Found', HttpStatus.NO_CONTENT);
    }
    return orders;
  }

  async createOrder(orderModel: CreateOrderDto) {
    orderModel.products = await this.cartService.findCartByUser(
      orderModel.userId,
    );
    const createOrder = {
      userId: orderModel.userId,
      products: orderModel.products,
    };
    const { _id } = await this.orderModel.create(createOrder);
    let order = await this.orderModel.findById(_id).populate('products');

    const totalPrice = order.products.reduce((acc, product) => {
      const price = product.price * product.quantity;
      return acc + price;
    }, 0);
    await order.update({ totalPrice });

    order = await this.orderModel
      .findById(_id)
      .populate('userId')
      .populate('products');

    return await order.save();
  }

  async findAll() {
    return await this.orderModel.find();
  }

  async findById(id: string): Promise<Order> {
    return await this.orderModel.findById(id);
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

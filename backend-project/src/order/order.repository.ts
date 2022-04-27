import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductService } from 'src/product/product.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(
    @InjectModel('Order') private orderModel: Model<Order>,
    private readonly productService: ProductService,
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
    const createOrder = new this.orderModel(orderModel);
    await createOrder.save();

    // const orders = await this.orderModel
    //   .find({ userId: createOrder.userId })
    //   .populate('userId')
    //   .populate('products.products');

    // const totalPrice = orders.map(async (item) => {
    //   const produto = await this.productService.findById(item);
    //   let price = produto.price * item.quantity;
    //   return (price += 0);
    // });

    // await createOrder.updateOne({ totalPrice: totalPrice });
    return createOrder;
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

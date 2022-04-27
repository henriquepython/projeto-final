import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductRepository } from 'src/product/product.repository';
import { Cart } from './entities/cart.entity';

@Injectable({ scope: Scope.REQUEST })
export class CartRepository {
  constructor(
    @InjectModel('Cart') private cartModel: Model<Cart>,
    private readonly productRepository: ProductRepository,
  ) {}

  async create(cart: Cart) {
    const product = await this.productRepository.findByCartId(cart.productId);
    const carts = await this.cartModel.create({
      userId: cart.userId,
      productId: cart.productId,
      quantity: cart.quantity,
      price: product.price,
    });
    await carts.save();
    return carts;
  }

  async remove(id: string) {
    return await this.cartModel.deleteOne({ _id: id }).exec();
  }

  async removeMany(userId: any) {
    return await this.cartModel.deleteMany({ userId: userId }).exec();
  }

  async findAll() {
    return await this.cartModel.find();
  }

  async findById(id: string): Promise<Cart> {
    return await this.cartModel.findById(id);
  }

  async findCartByUser(userId: any) {
    return await this.cartModel.find({ userId: userId });
  }
}

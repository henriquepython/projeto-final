import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { Product } from './entities/product.entity';

@Injectable({ scope: Scope.REQUEST })
export class ProductRepository {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async create(product: Product, user: User): Promise<Product> {
    const products = await this.productModel.create({
      ...product,
      owner: user,
    });
    await products.save();
    return products.populate('owner');
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().populate('owner');
  }

  async findById(id: string): Promise<Product> {
    return await this.productModel.findById(id).populate('owner');
  }

  async findByName(name: string): Promise<Product> {
    return await this.productModel.findById({ title: name }).populate('owner');
  }

  async update(id: string, Product: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(
      { _id: id },
      { $set: Product },
      { new: true },
    );
  }

  async remove(id: string): Promise<void> {
    await this.productModel.deleteOne({ _id: id }).exec();
  }
}

import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable({ scope: Scope.REQUEST })
export class ProductRepository {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async create(product: Product): Promise<Product> {
    const products = new this.productModel(product);
    return await products.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findById(id: string): Promise<Product> {
    return await this.productModel.findById(id);
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

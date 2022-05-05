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

  async findById(productId: string): Promise<Product> {
    return await this.productModel.findOne({ _id: productId });
  }

  async findByCartId(productId: any): Promise<Product> {
    return await this.productModel.findById(productId);
  }

  async findByName(productName: string): Promise<Product> {
    return await this.productModel.findOne({ title: productName });
  }

  async findByNameOne(productName: string): Promise<Product> {
    return await this.productModel.findOne({ title: productName });
  }

  async findByCategory(productName: string): Promise<Product[]> {
    return await this.productModel.find({ category: productName });
  }

  async update(productId: string, Product: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(
      { _id: productId },
      { $set: Product },
      { new: true },
    );
  }

  async remove(productId: string): Promise<void> {
    await this.productModel.deleteOne({ _id: productId }).exec();
  }
}

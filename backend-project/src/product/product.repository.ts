import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Product from './entities/product.entity';

@Injectable({ scope: Scope.REQUEST })
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    return await this.repository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.repository.find();
  }

  async findById(id: string) {
    return await this.repository.findOne({ where: { id: id } });
  }

  async findByName(name: string) {
    return await this.repository.findOne({ where: { name: name } });
  }

  async update(id: string, product: Product): Promise<Product> {
    await this.repository.update(id, product);
    return product;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

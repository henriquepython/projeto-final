import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import Product from './entities/product.entity';

@Injectable({ scope: Scope.REQUEST })
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<CreateProductDto> {
    return await this.repository.save(createProductDto);
  }

  async findAll(): Promise<CreateProductDto[]> {
    return await this.repository.find();
  }

  async findByName(name: string) {
    return await this.repository.find({ where: { name: name } });
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<UpdateProductDto> {
    await this.repository.update(id, updateProductDto);
    return updateProductDto;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

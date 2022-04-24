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

  async findByName(id: number) {
    return `This action returns a #${id} product`;
  }

  async findByDetails() {
    return 'This action adds a new product';
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

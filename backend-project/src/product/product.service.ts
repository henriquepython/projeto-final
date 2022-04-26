import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { BadRequestException, Injectable, Logger, Scope } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';

@Injectable({ scope: Scope.REQUEST })
export class ProductService {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private readonly logger: Logger,
    private readonly repository: ProductRepository,
  ) {
    this.logger = new Logger(ProductService.name);
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const productMapper = this.mapper.map(
      createProductDto,
      CreateProductDto,
      Product,
    );

    return this.repository.create(productMapper);
  }

  async findAll(): Promise<CreateProductDto[]> {
    this.logger.log('Looking for all products');
    const product = await this.repository.findAll();

    if (!product) {
      this.logger.error('Error fetching products');
      throw new BadRequestException('products not found');
    }

    this.logger.log('products found');
    return product;
  }

  async findById(id: string) {
    this.logger.log(`looking for products with name: ${id}`);
    const product = await this.repository.findById(id);

    if (!product) {
      this.logger.error(`there is no product with the name: ${name}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    return product;
  }

  async edit(id: string, updateProductDto: UpdateProductDto) {
    this.logger.log(`looking for products with id: ${id}`);
    const productMapper = this.mapper.map(
      updateProductDto,
      CreateProductDto,
      Product,
    );
    const product = await this.repository.findById(id);

    if (!product) {
      this.logger.error(`there is no product with the id: ${id}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    this.logger.log('updated product ');
    this.repository.update(id, productMapper);

    return productMapper;
  }

  async remove(id: string) {
    this.logger.log(`looking for products with id: ${id}`);
    const product = await this.repository.findById(id);

    if (!product) {
      this.logger.error(`there is no product with the id: ${id}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    this.logger.log('product removed');
    this.repository.remove(id);

    return `product with id: ${id} successfully removed `;
  }
}

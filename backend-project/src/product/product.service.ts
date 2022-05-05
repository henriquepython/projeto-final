import { BadRequestException, Injectable, Logger, Scope } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
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

  async create(createProductDto: CreateProductDto): Promise<CreateProductDto> {
    const productMapper = this.mapper.map(
      createProductDto,
      CreateProductDto,
      Product,
    );

    const product = await this.repository.findByNameOne(productMapper.title);

    if (product) {
      throw new BadRequestException('Product already exists');
    }

    this.logger.log('created product');
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

  async findById(productId: string): Promise<CreateProductDto> {
    this.logger.log(`looking for products with id: ${productId}`);
    const product = await this.repository.findById(productId);

    if (!product) {
      this.logger.error(`there is no product with the id: ${productId}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    return product;
  }

  async findByTitle(productName: string): Promise<CreateProductDto> {
    this.logger.log(`looking for products with name: ${productName}`);
    const product = await this.repository.findByName(productName);

    if (!product) {
      this.logger.error(`there is no product with the name: ${productName}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    return product;
  }

  async findByCategory(productCategory: string): Promise<CreateProductDto[]> {
    this.logger.log(`looking for products with category: ${productCategory}`);
    const product = await this.repository.findByCategory(productCategory);

    if (!product) {
      this.logger.error(
        `there is no product with the category: ${productCategory}`,
      );
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    return product;
  }

  async edit(
    productId: string,
    updateProductDto: UpdateProductDto,
  ): Promise<UpdateProductDto> {
    this.logger.log(`looking for products with id: ${productId}`);
    const product = await this.repository.findById(productId);

    const productMapper = this.mapper.map(
      updateProductDto,
      CreateProductDto,
      Product,
    );

    if (!product) {
      this.logger.error(`there is no product with the id: ${productId}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    this.logger.log('updated product ');
    this.repository.update(productId, productMapper);

    return productMapper;
  }

  async remove(productId: string): Promise<string> {
    this.logger.log(`looking for products with id: ${productId}`);
    const product = await this.repository.findById(productId);

    if (!product) {
      this.logger.error(`there is no product with the id: ${productId}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    this.logger.log('product removed');
    this.repository.remove(productId);

    return `product with id: ${productId} successfully removed `;
  }
}

import { Injectable, Logger, Scope } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable({ scope: Scope.REQUEST })
export class ProductService {
  constructor(
    private readonly logger: Logger,
    private readonly repository: ProductRepository,
  ) {
    this.logger = new Logger(ProductService.name);
  }

  create(createProductDto: CreateProductDto) {
    this.logger.log('create product');
    this.repository.create(createProductDto);
    return 'This action adds a new product';
  }

  findAll() {
    this.logger.log('create product');
    this.repository.findAll();
    return `This action returns all product`;
  }

  findProductByName(id: number) {
    this.logger.log('create product');
    this.repository.findByName(id);
    return `This action returns a #${id} product`;
  }

  findProductByDetils() {
    this.logger.log('create product');
    this.repository.findByDetails();
    return 'This action adds a new product';
  }

  edit(id: number, updateProductDto: UpdateProductDto) {
    this.logger.log('create product');
    this.repository.update(id, updateProductDto);
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    this.logger.log('create product');
    this.repository.remove(id);
    return `This action removes a #${id} product`;
  }
}

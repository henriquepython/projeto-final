import { Logger, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import Product from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductProfile } from './mapper/productProfile';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, Logger, ProductProfile],
  exports: [Logger],
})
export class ProductModule {}

import { Logger, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductProfile } from './mapper/productProfile';
import { ProductSchema } from 'src/product/entities/product.entity';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, Logger, ProductProfile],
  exports: [Logger],
})
export class ProductModule {}

import { Logger, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductProfile } from './mapper/productProfile';
import { ProductSchema } from 'src/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, Logger, ProductProfile],
  exports: [Logger],
})
export class ProductModule {}

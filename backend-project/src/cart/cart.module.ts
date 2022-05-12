import { Logger, Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartRepository } from './cart.repository';
import { CartProfile } from './mapper/cartProfile';
import { ProductModule } from 'src/product/product.module';
import { CartSchema } from 'src/shared/schemas/cart.schema';
import { Cart } from './entities/cart.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cart.name,
        schema: CartSchema,
      },
    ]),
    ProductModule,
  ],
  controllers: [CartController],
  providers: [CartService, CartRepository, Logger, CartProfile],
  exports: [CartService, Logger],
})
export class CartModule {}

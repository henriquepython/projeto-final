import { Logger, Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart, CartSchema } from './entities/cart.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CartRepository } from './cart.Repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cart.name,
        schema: CartSchema,
      },
    ]),
  ],
  controllers: [CartController],
  providers: [CartService, CartRepository, Logger],
  exports: [CartService, Logger],
})
export class CartModule {}

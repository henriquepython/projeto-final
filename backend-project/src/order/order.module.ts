import { Logger, Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order, OrderSchema } from './entities/order.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderRepository } from './order.repository';
import { OrderProfile } from './mapper/orderProfile';
import { ProductModule } from 'src/product/product.module';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
    ProductModule,
    CartModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, Logger, OrderProfile],
  exports: [Logger],
})
export class OrderModule {}

import { Logger, Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderRepository } from './order.repository';
import { OrderProfile } from './mapper/orderProfile';
import { ProductModule } from 'src/product/product.module';
import { CartModule } from 'src/cart/cart.module';
import { OrderSchema } from 'src/shared/schemas/order.schema';
import { Order } from './entities/order.entity';

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

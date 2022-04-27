import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { CartOrderDto } from 'src/cart/dto/cart-order.dto';

import { OrderStatus } from '../entities/OrderStatus.enum';

export class CreateOrderDto {
  @AutoMap()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  totalPrice: number;

  @AutoMap()
  @IsArray()
  @ApiProperty()
  products: CartOrderDto[];

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  status: OrderStatus;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty()
  userId: MongooseSchema.Types.ObjectId;
}

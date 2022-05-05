import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateCartDto } from 'src/cart/dto/create-cart.dto';

import { OrderStatus } from '../../shared/enum/OrderStatus.enum';

export class CreateOrderDto {
  @AutoMap()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  totalPrice: number;

  @AutoMap()
  @IsArray()
  @ApiProperty()
  products: CreateCartDto[];

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

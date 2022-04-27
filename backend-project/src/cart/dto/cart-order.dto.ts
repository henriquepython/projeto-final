import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

export class CartOrderDto {
  @ApiProperty()
  productId: MongooseSchema.Types.ObjectId;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;
}

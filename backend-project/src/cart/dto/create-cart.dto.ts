import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateCartDto {
  @ApiProperty()
  userId: MongooseSchema.Types.ObjectId;

  @ApiProperty()
  productId: MongooseSchema.Types.ObjectId;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;
}

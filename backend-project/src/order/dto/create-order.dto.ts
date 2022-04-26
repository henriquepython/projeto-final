import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateOrderDto {
  @AutoMap()
  @ApiProperty()
  user: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @ApiProperty()
  products: {
    product: MongooseSchema.Types.ObjectId;
    quantity: number;
    price: number;
  }[];

  @AutoMap()
  @ApiProperty()
  quantity: number;
}

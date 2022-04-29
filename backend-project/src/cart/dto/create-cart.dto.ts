import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateCartDto {
  @AutoMap()
  @IsNotEmpty()
  @ApiProperty()
  userId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty()
  productId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  quantity: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsOptional()
  @ApiProperty()
  image: string;
}

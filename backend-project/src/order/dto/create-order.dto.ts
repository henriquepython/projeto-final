import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

class OrderItem {
  @Min(1)
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  product_id: string;
}

export class CreateOrderDto {
  @ValidateNested({ each: true })
  @Type(() => OrderItem)
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  items: OrderItem[];
}

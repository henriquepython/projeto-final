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
  quantity: number;

  @IsString()
  @IsNotEmpty()
  product_id: string;
}

export class CreateOrderDto {
  @ValidateNested({ each: true })
  @Type(() => OrderItem)
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty()
  items: OrderItem[];
}

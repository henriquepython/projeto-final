import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { InputProductDetail } from './InputProductDetail';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsNotEmpty()
  stock: number;

  @IsArray()
  details: InputProductDetail[];
}

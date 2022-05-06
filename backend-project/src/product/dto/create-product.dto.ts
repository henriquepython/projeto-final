import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Category } from '../../shared/enum/category.enum';

export class CreateProductDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @AutoMap()
  @IsOptional()
  @IsUrl()
  @ApiProperty()
  image: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  @ApiProperty()
  description: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ enum: ['Eletronics', 'Clothes', 'Sports'] })
  category: Category;

  @AutoMap()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @AutoMap()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantity: number;
}

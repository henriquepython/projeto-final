import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { Category } from './category.enum';

export class CreateProductDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @AutoMap()
  @IsUrl()
  @ApiProperty()
  image: string;

  @AutoMap()
  @IsString()
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

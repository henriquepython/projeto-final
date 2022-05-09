import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @AutoMap()
  @IsOptional()
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
  @ApiProperty()
  category: string;

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

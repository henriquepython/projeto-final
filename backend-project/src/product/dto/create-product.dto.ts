import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  stock: number;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  image_url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;
}

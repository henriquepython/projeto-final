import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  stock: number;

  @AutoMap()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  image_url: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;
}

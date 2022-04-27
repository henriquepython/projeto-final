import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { OrderStatus } from '../entities/OrderStatus.enum';

export class StatusOrderDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  status: OrderStatus;
}

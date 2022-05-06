import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { OrderStatus } from '../../shared/enum/OrderStatus.enum';

export class StatusOrderDto {
  @AutoMap()
  @ApiProperty()
  status: OrderStatus;
}

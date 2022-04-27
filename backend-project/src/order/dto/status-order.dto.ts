import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '../entities/OrderStatus.enum';

export class StatusOrderDto {
  @AutoMap()
  @ApiProperty()
  status: OrderStatus;
}

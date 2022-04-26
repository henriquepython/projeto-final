import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDTO {
  @ApiProperty()
  products: {
    product: string;
    quantity: number;
  }[];
}

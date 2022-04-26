import { ApiProperty } from '@nestjs/swagger';

export class AddCarDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  productId: string;
}

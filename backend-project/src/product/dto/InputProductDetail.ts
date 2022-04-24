import { IsNotEmpty, IsString } from 'class-validator';

export class InputProductDetail {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  contents: string;
}

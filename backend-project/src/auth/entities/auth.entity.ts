import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Auth {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/shared/enum/Role.enum';

export class CreateUserDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @AutoMap()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @AutoMap()
  @ApiProperty({ enum: ['user', 'admin'], default: 'user' })
  roles: Role;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phoneNumber: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

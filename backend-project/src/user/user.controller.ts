import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpCode,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@UsePipes(new ValidationPipe())
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @HttpCode(201)
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':email')
  findByEmail(@Param('email') email: string): Promise<CreateUserDto> {
    return this.userService.findUserByEmail(email);
  }

  @Get()
  findAll(): Promise<CreateUserDto[]> {
    return this.userService.findAll();
  }
}

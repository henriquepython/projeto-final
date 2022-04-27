import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/Admin')
  createAdmin(@Body() createUserDto: CreateUserDto) {
    return this.userService.createAdmin(createUserDto);
  }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}

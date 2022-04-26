import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from 'src/product/product.service';
import { AddCarDto } from './dto/addCar.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/Admin')
  createAdmin(@Body() createUserDto: CreateUserDto) {
    return this.userService.createAdmin(createUserDto);
  }

  @Post('/ADD')
  addCar(@Body() createAddDto: AddCarDto) {
    return this.productService.addCar(
      createAddDto.productId,
      createAddDto.userId,
    );
  }

  // @Post('/REV')
  // removeCar(@Body() removeAddDto: RemoveCarDto) {
  //   return this.productService.removeCar(removeAddDto.productId);
  // }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}

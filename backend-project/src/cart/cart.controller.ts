import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  HttpCode,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@ApiBearerAuth()
@ApiTags('cart')
@UsePipes(new ValidationPipe())
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @HttpCode(201)
  @Post()
  addCart(@Body() createCartDto: CreateCartDto) {
    return this.cartService.addCart(createCartDto);
  }

  @Delete(':id')
  removeCart(@Param('id') id: string) {
    return this.cartService.removeCart(id);
  }

  @Delete('/user/:id')
  removeAllByUser(@Param('id') id: string) {
    return this.cartService.removeAllCart(id);
  }

  @Get('/user/:id')
  findByUser(@Param('id') id: string) {
    return this.cartService.findCartByUser(id);
  }
}

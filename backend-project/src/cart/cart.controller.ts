import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addCart(@Body() createCartDto: CreateCartDto) {
    return this.cartService.addCart(createCartDto);
  }

  @Delete('/user/:id')
  removeCart(@Param('id') id: string) {
    return this.cartService.removeCart(id);
  }

  @Delete(':id')
  removeAllByUser(@Param('id') id: string) {
    return this.cartService.removeAllCart(id);
  }

  @Get('/user/:id')
  findByUser(@Param('id') id: string) {
    return this.cartService.findCartByUser(id);
  }
}

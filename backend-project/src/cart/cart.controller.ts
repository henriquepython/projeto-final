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

  @Delete(':id')
  removeCart(@Param('id') id: string) {
    return this.cartService.removeCart(id);
  }

  @Delete('/userId/:userId')
  removeAllByUser(@Param('userId') userId: string) {
    return this.cartService.removeAllCart(userId);
  }

  @Get(':userId')
  findByName(@Param('userId') userId: string) {
    return this.cartService.findCartByUser(userId);
  }
}

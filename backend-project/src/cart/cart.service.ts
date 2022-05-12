import { BadRequestException, Injectable, Logger, Scope } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './entities/cart.entity';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

@Injectable({ scope: Scope.REQUEST })
export class CartService {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private readonly logger: Logger,
    private readonly repository: CartRepository,
  ) {
    this.logger = new Logger(CartService.name);
  }

  async addCart(createCartDto: CreateCartDto): Promise<CreateCartDto> {
    const cartMapper = this.mapper.map(createCartDto, CreateCartDto, Cart);

    const cartProduct = await this.repository.findByIdProduct(
      cartMapper.productId,
    );

    if (cartProduct) {
      this.logger.log('product added to cart');
      cartMapper.quantity += (await cartProduct).quantity;
      return await this.repository.update(cartMapper.productId, cartMapper);
    }

    this.logger.log('new product added to cart');
    return await this.repository.create(cartMapper);
  }

  async removeCart(id: string): Promise<string> {
    this.logger.log(`looking for products with id: ${id}`);
    const cartProduct = await this.repository.findByIdProduct(id);

    if (!cartProduct) {
      this.logger.error(`there is no product with the id: ${id}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('product found');
    this.logger.log('product removed');
    this.repository.remove(id);

    return `product with id: ${id} has been removed from cart`;
  }

  async removeAllCart(userId: any): Promise<string> {
    this.logger.log('empty cart');
    await this.repository.removeMany(userId);
    return 'empty cart';
  }

  async findCartByUser(userId: any): Promise<CreateCartDto[]> {
    const cartUser = await this.repository.findCartByUser(userId);

    if (!cartUser) {
      this.logger.error(`there is no cart with the userId: ${userId}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('cart found');
    return cartUser;
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.auth.guard';

@ApiBearerAuth()
@ApiTags('product')
@UsePipes(new ValidationPipe())
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @HttpCode(201)
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  findAll(): Promise<CreateProductDto[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CreateProductDto> {
    return this.productService.findProductById(id);
  }

  @Get('/name/:name')
  findByName(@Param('name') name: string): Promise<CreateProductDto> {
    return this.productService.findProductByTitle(name);
  }

  @Get('/category/:category')
  findByCategory(
    @Param('category') category: string,
  ): Promise<CreateProductDto[]> {
    return this.productService.findProductByCategory(category);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<UpdateProductDto> {
    return this.productService.editProduct(id, updateProductDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<string> {
    return this.productService.removeProduct(id);
  }
}

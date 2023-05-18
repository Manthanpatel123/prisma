/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() data: { name: string, categoryId: number }) {
    return this.productService.createProduct(data.name, data.categoryId);
  }

  @Get()
  findAll() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: { name: string, categoryId: number }) {
    return this.productService.updateProduct(Number(id), data.name, data.categoryId);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.deleteProduct(Number(id));
  }

  
}

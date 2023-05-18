/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('productsmany')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(
    @Body('name') name: string,
    @Body('categories') categoryIds: number[],
  ) {
    console.log(name,categoryIds)
    return this.productService.createProduct(name, categoryIds);
  }

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: number) {
    return this.productService.getProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('categories') categoryIds: number[],
  ) {
    return this.productService.updateProduct(id, name, categoryIds);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}

/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CategoryService } from './category.service'

@Controller('categorysmany')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @Post()
  async createCategory(
    @Body('name') name: string,
    @Body('products') categoryIds: number[]=[],
  ) {
    return this.CategoryService.createCategory(name, categoryIds);
  }

  @Get()
  async getAllCategory() {
    return this.CategoryService.getAllCategory();
  }

  @Get(':id')
  async getCategory(@Param('id') id: number) {
    return this.CategoryService.getCategory(id);
  }

  @Put(':id')
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body('name') name: string,
    @Body('products') categoryIds: number[],
  ) {
    return this.CategoryService.updateCategory(id, name, categoryIds);
  }

  @Delete(':id')
  async deleteCategory(@Param('id',ParseIntPipe) id: number) {
    return this.CategoryService.deleteCategory(id);
  }
}

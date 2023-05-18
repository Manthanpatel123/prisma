/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post ,Delete ,Param,Put} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() data: { name: string }) {
    return this.categoryService.createCategory(data.name);
  }

  @Get()
  findAll() {
    return this.categoryService.getAllCategories();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: { name: string }) {
    return this.categoryService.updateCategory(Number(id), data.name);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoryService.deleteCategory(Number(id));
  }
}

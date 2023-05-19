// /* eslint-disable prettier/prettier */
// import { Body, Controller, Get, Post ,Delete ,Param,Put,UseGuards } from '@nestjs/common';
// import { CategoryService } from './category.service';
// import { rbacMiddleware } from '../rbac.middleware';

// @Controller('categories')
// export class CategoryController {
//   constructor(private readonly categoryService: CategoryService) {}

//   @Post()
//   @UseGuards(rbacMiddleware) 
//   create(@Body() data: { name: string }) {
//     return this.categoryService.createCategory(data.name);
//   }

//   @Get()
//   @UseGuards(rbacMiddleware) 
//   findAll() {
//     return this.categoryService.getAllCategories();
//   }

//   @Put(':id')
//   @UseGuards(rbacMiddleware) 
//   update(@Param('id') id: string, @Body() data: { name: string }) {
//     return this.categoryService.updateCategory(Number(id), data.name);
//   }

//   @Delete(':id')
//   @UseGuards(rbacMiddleware) 
//   delete(@Param('id') id: string) {
//     return this.categoryService.deleteCategory(Number(id));
//   }
// }

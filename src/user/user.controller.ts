import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('products')
  async getProducts(
    @Query('search') search: string,
    @Query('sortBy') sortBy: string,
    @Query('sortOrder') sortOrder: 'asc' | 'desc',
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<{ products: Product[]; total: number }> {
    const products = await this.userService.searchProducts(
      search,
      sortBy,
      sortOrder,
      page,
      pageSize,
    );
    const total = await this.userService.getProductCount(search);

    return { products, total };
  }
}

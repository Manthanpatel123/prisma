import { Injectable } from '@nestjs/common';
import { Prisma, Product as PrismaProduct } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async searchProducts(
    searchQuery: string,
    sortBy: string,
    sortOrder: 'asc' | 'desc',
    page: number,
    pageSize: number,
  ) {
    const products = await this.prisma.getPrismaClient().product.findMany({
      where: {
        name: { contains: searchQuery, mode: 'insensitive' },
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return products.map((product: PrismaProduct) => new Product(product));
  }

  async getProductCount(searchQuery: string): Promise<number> {
    const count = await this.prisma.getPrismaClient().product.count({
      where: {
        name: { contains: searchQuery, mode: 'insensitive' },
      },
    });

    return count;
  }
}

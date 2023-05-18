/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(name: string, categoryId: number) {
    return this.prisma.getPrismaClient().product.create({
      data: {
        name,
        categoryId,
      },
    });
  }

  async getAllProducts() {
    return this.prisma.getPrismaClient().product.findMany({
      include: { category: true },
    });
  }

  async getProductById(id: number) {
    return this.prisma.getPrismaClient().product.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async updateProduct(id: number, name: string, categoryId: number) {
    return this.prisma.getPrismaClient().product.update({
      where: { id },
      data: {
        name,
        categoryId,
      },
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.getPrismaClient().product.delete({
      where: { id },
    });
  }
}

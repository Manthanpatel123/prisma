/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(name: string, categoryIds: number[]=[]) {
    const categories = {
      connect: categoryIds.map((id) => ({ id })),
    };
    console.log("categories",categories)
    return this.prisma.getPrismaClient().productmany.create({
      data: {
        name,
        categories,
      },
    });
  }

  async getProduct(id: number) {
    return this.prisma.getPrismaClient().productmany.findUnique({
      where: { id },
      include: { categories: true },
    });
  }

  async getAllProducts() {
    return this.prisma.getPrismaClient().productmany.findMany({
      include: { categories: true },
    });
  }

  async updateProduct(id: number, name: string, categoryIds: number[]) {
    const categories = {
      connect: categoryIds.map((id) => ({ id })),
    };

    return this.prisma.getPrismaClient().productmany.update({
      where: { id },
      data: {
        name,
        categories,
      },
      include: { categories: true },
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.getPrismaClient().productmany.delete({
      where: { id },
    });
  }
}
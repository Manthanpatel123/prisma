/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(name: string, productIds: number[]=[]) {
    console.log(productIds)
    const products = {
      connect: productIds.map((id) => ({ id })),
    };
    console.log("categories",products)
    return this.prisma.getPrismaClient().categorymany.create({
      data: {
        name,
        products,
      },
    });
  }

  async getCategory(id: number) {
    return this.prisma.getPrismaClient().categorymany.findUnique({
      where: { id },
      include: { products: true },
    });
  }

  async getAllCategory() {
    return this.prisma.getPrismaClient().categorymany.findMany({
      include: { products: true },
    });
  }

  async updateCategory(id: number, name: string, categoryIds: number[]) {
    const products = {
      connect: categoryIds.map((id) => ({ id })),
    };

    return this.prisma.getPrismaClient().categorymany.update({
      where: { id },
      data: {
        name,
        products,
      },
      include: { products: true },
    });
  }

  async deleteCategory(id: number) {
    return this.prisma.getPrismaClient().categorymany.delete({
      where: { id },
    });
  }
}
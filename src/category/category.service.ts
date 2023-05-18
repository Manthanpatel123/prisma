/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(name: string) {
    return this.prisma.getPrismaClient().category.create({ data: { name } });
  }

  async getAllCategories() {
    return this.prisma.getPrismaClient().category.findMany({
      include: { products: true },
    });
  }

  async updateCategory(id: number, name: string) {
    return this.prisma.getPrismaClient().category.update({
      where: { id },
      data: { name },
    });
  }

  async deleteCategory(id: number) {
    return this.prisma.getPrismaClient().category.delete({
      where: { id },
    });
  }
}

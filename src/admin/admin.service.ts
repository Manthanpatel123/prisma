import { Injectable } from '@nestjs/common';
import { Prisma, User as PrismaUser } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async searchUsers(
    searchQuery: string,
    sortBy: string,
    sortOrder: 'asc' | 'desc',
    page: number,
    pageSize: number,
  ): Promise<User[]> {
    const users = await this.prisma.getPrismaClient().user.findMany({
      where: {
        OR: [
          { name: { contains: searchQuery, mode: 'insensitive' } },
          { email: { contains: searchQuery, mode: 'insensitive' } },
        ],
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return users.map((user: PrismaUser) => new User(user));
  }

  async getUserCount(searchQuery: string): Promise<number> {
    const count = await this.prisma.user.count({
      where: {
        OR: [
          { name: { contains: searchQuery, mode: 'insensitive' } },
          { email: { contains: searchQuery, mode: 'insensitive' } },
        ],
      },
    });

    return count;
  }
}

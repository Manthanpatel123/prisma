import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PermissionService {
  async createPermission(name: string): Promise<any> {
    return prisma.permission.create({ data: { name } });
  }

  async assignPermissionToRole(permissionId: number, roleId: number): Promise<any> {
    return prisma.permission.update({
      where: { id: permissionId },
      data: { roles: { connect: { id: roleId } } },
    });
  }

  async assignPermissionToCategory(permissionId: number, categoryId: number): Promise<any> {
    return prisma.permission.update({
      where: { id: permissionId },
      data: { categories: { connect: { id: categoryId } } },
    });
  }
}

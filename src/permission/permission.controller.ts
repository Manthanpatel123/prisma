import { Controller, Post, Body } from '@nestjs/common';
import { PermissionService } from './permission.service';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  async createPermission(@Body('name') name: string) {
    try {
      const permission = await this.permissionService.createPermission(name);
      return { success: true, data: permission };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post('assign-role')
  async assignPermissionToRole(@Body() data: { permissionId: number; roleId: number }) {
    try {
      const { permissionId, roleId } = data;
      await this.permissionService.assignPermissionToRole(permissionId, roleId);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post('assign-category')
  async assignPermissionToCategory(@Body() data: { permissionId: number; categoryId: number }) {
    try {
      const { permissionId, categoryId } = data;
      await this.permissionService.assignPermissionToCategory(permissionId, categoryId);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

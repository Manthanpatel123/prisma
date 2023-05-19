import { Controller, Get, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { User } from './entity/admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUsers(
    @Query('search') search: string,
    @Query('sortBy') sortBy: string,
    @Query('sortOrder') sortOrder: 'asc' | 'desc',
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<{ users: User[]; total: number }> {
    const users = await this.userService.searchUsers(
      search,
      sortBy,
      sortOrder,
      page,
      pageSize,
    );
    const total = await this.userService.getUserCount(search);

    return { users, total };
  }
}

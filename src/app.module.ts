import { Module } from '@nestjs/common';
// import { CategoryModule } from './category/category.module';
import { CategoryManyModule } from './categorymany/category.module';
import { ProductModule } from './product/product.module';
import { ProductManyModule } from './productmany/product.module';
import { PrismaService } from './prisma/prisma.service';
import { PermissionModule } from './permission/permission.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ProductModule,
    ProductManyModule,
    CategoryManyModule,
    PermissionModule,
    UserModule
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

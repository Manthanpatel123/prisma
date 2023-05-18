import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { CategoryManyModule } from './categorymany/category.module';
import { ProductModule } from './product/product.module';
import { ProductManyModule } from './productmany/product.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    CategoryModule,
    ProductModule,
    ProductManyModule,
    CategoryManyModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

import { Prisma } from '@prisma/client';

export class Product {
  name: string;
  categoryId: number;
  // ... other properties

  constructor(data: Prisma.ProductCreateInput) {
    this.name = data.name;
    this.categoryId = data.category.connect.id
    // ... initialize other properties
  }
}

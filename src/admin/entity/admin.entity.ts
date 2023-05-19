import { Prisma } from '@prisma/client';

export class User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  // ... other properties

  constructor(data: Prisma.UserCreateInput) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.createdAt = data.createdAt;
    // ... initialize other properties
  }
}

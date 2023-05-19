// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function seed() {
//   const adminRole = await prisma.role.create({
//     data: {
//       name: 'admin',
//       permissions: {
//         create: [
//           { name: 'createCategory' },
//           { name: 'updateCategory' },
//           { name: 'deleteCategory' },
//         ],
//       },
//     },
//   });

//   const userRole = await prisma.role.create({
//     data: {
//       name: 'user',
//       permissions: {
//         create: [{ name: 'viewCategory' }],
//       },
//     },
//   });

//   await prisma.category.create({
//     data: {
//       name: 'Electronics',
//       permissions: {
//         connect: { id: userRole.id },
//       },
//     },
//   });

//   await prisma.category.create({
//     data: {
//       name: 'Clothing',
//       permissions: {
//         connect: { id: userRole.id },
//       },
//     },
//   });

//   // ... add more categories as needed

//   console.log('Database seeded successfully.');

//   prisma.$disconnect();
// }

// seed().catch((error) => {
//   console.error(error);
//   process.exit(1);
// });

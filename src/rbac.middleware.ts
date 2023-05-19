// import { Request, Response, NextFunction } from 'express';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export const rbacMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const userId = req.body.user.id; // Get the user ID from the request

//     // Fetch the user with their associated role and permissions from the database
//     const user = await prisma.user.findUnique({
//       where: { id: userId },
//       include: { role: { include: { permissions: true } } },
//     });

//     if (!user) {
//       return res.status(401).json({ message: 'User not found.' });
//     }
//     console.log(user);

//     // Check if the user's role has access to the requested category based on permissions
//     const categoryId = Number(req.params.id);
//     const hasAccess = user.role.permissions.some((permission) => {
//       return permission.categories.some(
//         (category) => category.id === categoryId,
//       );
//     });

//     if (!hasAccess) {
//       return res.status(403).json({ message: 'Insufficient permissions.' });
//     }

//     // Pass the user and role to the next middleware or route handler
//     req.body.user = user;
//     req.body.role = user.role;

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// };

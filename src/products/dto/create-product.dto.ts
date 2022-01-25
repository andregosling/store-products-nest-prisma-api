import { Prisma } from '@prisma/client';

export class CreateProductDto implements Prisma.ProductCreateInput {
  name: string;
  ammount: number;
}

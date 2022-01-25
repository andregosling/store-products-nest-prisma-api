import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name, ammount }: CreateProductDto) {
    if (!name) throw new BadRequestException('Name are required.');
    if (!ammount) throw new BadRequestException('Ammount are required.');

    const findanswer = await this.prisma.product.findFirst({
      where: { name },
    });

    if (findanswer) throw new BadRequestException('Product already exists.');

    return this.prisma.product.create({
      data: { name, ammount },
    });
  }

  async findAll() {
    const products = await this.prisma.product.findMany();
    if (!products?.length) throw new BadRequestException('Not found products.');
    return products;
  }

  async findOne(id: number) {
    const findProduct = await this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!findProduct) throw new BadRequestException('Not found product.');
    return findProduct;
  }

  async update(id: number, { name, ammount }: UpdateProductDto) {
    const findanswer = await this.prisma.product.findFirst({
      where: { id },
    });

    if (!findanswer) throw new BadRequestException('Product not found.');

    console.log(ammount);

    if (!name && !ammount)
      throw new BadRequestException('Name or ammount are required.');

    return this.prisma.product.update({
      where: {
        id: id,
      },
      data: { name, ammount },
    });
  }

  async remove(id: number) {
    const findanswer = await this.prisma.product.findFirst({
      where: { id },
    });

    if (!findanswer) throw new BadRequestException('Product not found.');

    return this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}

import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { ProductRepository } from '../product-repository';
import { PrismaService } from 'src/providers/prisma-client-provider';
import { UpdateProductDto } from 'src/product/dto/update-product.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create({ name, price, description }: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: {
        name,
        price,
        description,
      },
    });
    return new Product({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  }

  public async update({ id, name, description, price }: UpdateProductDto) {
    const product = await this.prisma.product.update({
      data: { name, description, price },
      where: { id: id },
    });
    return new Product({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  }

  public async findById(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return new Product({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  }

  public async findAll() {
    const products = await this.prisma.product.findMany();
    return products.map(
      (product) =>
        new Product({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        }),
    );
  }
}

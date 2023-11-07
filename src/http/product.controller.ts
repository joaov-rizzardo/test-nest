import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { UpdateProductDto } from 'src/product/dto/update-product.dto';
import { CreateProductUseCase } from 'src/product/use-cases/create-product';
import { FindAllProductsUseCase } from 'src/product/use-cases/find-all-product';
import { FindProductByIdUseCase } from 'src/product/use-cases/find-product-by-id';
import { UpdateProductUseCase } from 'src/product/use-cases/update-product';
import { ProductRepository } from 'src/repositories/product-repository';

@UsePipes(ZodValidationPipe)
@Controller('product')
export class ProductController {
  constructor(private PrismaProductRepository: ProductRepository) {}

  @Post()
  async create(@Body() { name, price, description }: CreateProductDto) {
    const useCase = new CreateProductUseCase(this.PrismaProductRepository);
    const product = await useCase.execute({ name, price, description });
    return product.toObject();
  }

  @Get()
  async findAll() {
    const useCase = new FindAllProductsUseCase(this.PrismaProductRepository);
    const products = await useCase.execute();
    return products.map((product) => product.toObject());
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const useCase = new FindProductByIdUseCase(this.PrismaProductRepository);
    const product = await useCase.execute(parseInt(id));
    return product.toObject();
  }

  @Put()
  async update(@Body() { id, name, price, description }: UpdateProductDto) {
    const useCase = new UpdateProductUseCase(this.PrismaProductRepository);
    const product = await useCase.execute({ id, name, price, description });
    return product.toObject();
  }
}

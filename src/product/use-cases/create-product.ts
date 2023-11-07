import { ProductRepository } from 'src/repositories/product-repository';
import { CreateProductDto } from '../dto/create-product.dto';

export class CreateProductUseCase {
  constructor(private readonly productRepositiry: ProductRepository) {}

  async execute({ name, price, description }: CreateProductDto) {
    const user = await this.productRepositiry.create({
      name,
      price,
      description,
    });
    return user;
  }
}

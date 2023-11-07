import { ProductRepository } from 'src/repositories/product-repository';
import { UpdateProductDto } from '../dto/update-product.dto';

export class UpdateProductUseCase {
  constructor(private readonly productRepositiry: ProductRepository) {}

  async execute({ id, name, price, description }: UpdateProductDto) {
    const user = await this.productRepositiry.update({
      id,
      name,
      price,
      description,
    });
    return user;
  }
}

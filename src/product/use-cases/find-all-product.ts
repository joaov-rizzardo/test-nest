import { ProductRepository } from 'src/repositories/product-repository';

export class FindAllProductsUseCase {
  constructor(private readonly productRepositiry: ProductRepository) {}

  async execute() {
    const users = await this.productRepositiry.findAll();
    return users;
  }
}

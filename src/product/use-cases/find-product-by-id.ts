import { ProductRepository } from 'src/repositories/product-repository';

export class FindProductByIdUseCase {
  constructor(private readonly productRepositiry: ProductRepository) {}

  async execute(id: number) {
    const user = await this.productRepositiry.findById(id);
    return user;
  }
}

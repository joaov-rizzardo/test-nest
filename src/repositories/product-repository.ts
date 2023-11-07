import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { UpdateProductDto } from 'src/product/dto/update-product.dto';

export abstract class ProductRepository {
  abstract create: ({
    name,
    price,
    description,
  }: CreateProductDto) => Promise<Product>;
  abstract update: ({
    id,
    name,
    price,
    description,
  }: UpdateProductDto) => Promise<Product>;
  abstract findAll: () => Promise<Product[]>;
  abstract findById: (id: number) => Promise<Product>;
}

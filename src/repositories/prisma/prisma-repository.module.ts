import { Module } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma-client-provider';
import { PrismaProductRepository } from './prisma-product-repository';
import { ProductRepository } from '../product-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [ProductRepository],
})
export class PrismaRepositoryModule {}

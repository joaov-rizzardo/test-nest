import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { PrismaRepositoryModule } from 'src/repositories/prisma/prisma-repository.module';

@Module({
  imports: [PrismaRepositoryModule],
  controllers: [ProductController],
  providers: [],
})
export class HttpModule {}

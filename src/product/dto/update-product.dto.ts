import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UpdateProductSchema = z.object({
  id: z.number().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().min(1),
});

export class UpdateProductDto extends createZodDto(UpdateProductSchema) {}

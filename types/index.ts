import { z } from 'zod';
import { productSchema } from '@/lib/validators';

export type Product = z.infer<typeof productSchema> & {
    id: number;
    rating: string;
    createdAt: Date;
}
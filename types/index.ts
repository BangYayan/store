import { z } from 'zod';
import { productSchema } from '@/lib/validators';

export type Product = z.infer<typeof productSchema> & {
    id: string;
    rating: string;
    createdAt: Date;
    numReviews?: number; // Add if needed
}
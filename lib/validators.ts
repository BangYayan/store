import { z } from 'zod';
import { numberToDecimal } from './utils';

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(numberToDecimal(Number(value))), 'Price must be 2 decimals');

export const productSchema = z.object({
    name: z.string().min(3, 'Name must at least have 3 characters').max(255),
    slug: z.string().min(3, 'Slug must at least have 3 characters').max(255),
    category: z.string().min(3, 'Category must at least have 3 characters').max(255),
    brand: z.string().min(3, 'Brand must at least have 3 characters').max(255),
    description: z.string().min(3, 'Description must at least have 3 characters').max(255),
    images: z.array(z.string()),
    stock: z.coerce.number(),
    isFeatued: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
})
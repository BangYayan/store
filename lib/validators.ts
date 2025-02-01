import { z } from 'zod';
import { numberToDecimal } from './utils';

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(numberToDecimal(Number(value))), 'Price must be 2 decimals');

export const productSchema = z.object({
    name: z.string().min(3, 'Name must at least have 3 characters').max(255),
    slug: z.string().min(3, 'Slug must at least have 3 characters').max(255),
    category: z.string().min(3, 'Category must at least have 3 characters').max(255),
    brand: z.string().min(3, 'Brand must at least have 3 characters').max(255),
    description: z.string().nullable(),
    images: z.array(z.string()),
    stock: z.coerce.number(),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
})

export const signInSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})
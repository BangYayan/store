'use server';

import { convertToObject } from "../utils";
import { LIMIT_PRODUCT } from "../constants";
import { prisma } from "@/db/prisma";

export async function getLatestProducts() {
    try {
        const data =  await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: LIMIT_PRODUCT
        });
        return convertToObject(data);
    } catch(error) {
        console.error('Error fetching latest products:', error);
        return [];
    }
    finally {
        await prisma.$disconnect();
    }

}

export async function getSlugProducts(slug: string) {
    return await prisma.product.findUnique({
        where: {
            slug: slug,
        }
    });
} 
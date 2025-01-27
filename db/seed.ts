import { prisma } from './prisma';
import sampleData from './sample-data';

async function main() {
    
    try {
        console.log('Starting database seed...');
        
        console.log('Cleaning existing products...');
        await prisma.product.deleteMany();
        
        console.log('Inserting sample products...');
        await prisma.product.createMany({
            data: sampleData.products
        });
        
        console.log(`Successfully seeded ${sampleData.products.length} products`);
        
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((error) => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
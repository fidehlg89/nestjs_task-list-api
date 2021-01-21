import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  const contact1 = await prisma.contact.create({
    data: {
        name: 'John Doe',
        address: 'Guatemala City, Guatemala',
        phone: '014587962',
        email: 'john@simpson.com',
    },
  });
  const contact2 = await prisma.contact.create({
    data: {
        name: 'Jane Doe',
        address: 'París, France',
        phone: '222 222 222',
        email: 'jane@simpson.com',
    },
  });

  console.log({ contact1, contact2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
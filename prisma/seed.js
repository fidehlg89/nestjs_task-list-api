import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  const task1 = await prisma.task.create({
    data: {
        content: 'Get sleep',
        status: 'open',
    },
  });
  const task2 = await prisma.task.create({
    data: {
        content: 'Go Shop',
        status: 'open',
    },
  });

  console.log({ task1, task2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
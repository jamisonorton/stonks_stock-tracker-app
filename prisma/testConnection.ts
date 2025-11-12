import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function testConnection() {
  const start = performance.now();
  try {
    await prisma.$connect();
    const end = performance.now();
    console.log(
      `Prisma successfully connected to the database in ${(end - start).toFixed(
        2
      )} ms`
    );
  } catch (error) {
    console.error("Prisma failed to connect to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const jamison = await prisma.user.upsert({
    where: { email: "jamison@prisma.io" },
    update: {},
    create: {
      email: "jamison@prisma.io",
      name: "Jamison Orton",
      id: 1,
    },
  });
  const jane = await prisma.user.upsert({
    where: { email: "jane@prisma.io" },
    update: {},
    create: {
      email: "jane@prisma.io",
      name: "Jane Orton",
      id: 2,
    },
  });
  console.log({ jamison, jane });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

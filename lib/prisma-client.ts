import { PrismaClient } from "./generated/prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter: require("@prisma/adapter-d1").PrismaD1,
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = global.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

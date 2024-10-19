import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.$transaction(async (tx) => {
        await tx.$queryRawUnsafe(
            'INSERT INTO public."Account" ("id") VALUES (1);'
        );

        await tx.$queryRawUnsafe(
            'INSERT INTO public."Setting" ("accountId") values (NULL);'
        );

        await tx.$queryRawUnsafe(
            'INSERT INTO public."User" ("userSettingId") values (1);'
        );
    });
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

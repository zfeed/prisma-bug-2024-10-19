import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
    const prisma = new PrismaClient({ log: ['query'] });

    await prisma.user.update({
        where: { id: 1 },
        data: {
            userSetting: {
                upsert: {
                    where: { accountId: 1 },
                    create: {},
                    update: {}
                }
            }
        }
    });
}

bootstrap();

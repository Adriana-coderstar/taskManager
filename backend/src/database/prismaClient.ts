import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.DATABASE_URL;

const prismaClient = new PrismaClient({ datasources: { db: { url } } });

export { prismaClient };

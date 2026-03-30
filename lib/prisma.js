import { PrismaClient } from '@prisma/client'
import { PrismaMssql } from '@prisma/adapter-mssql'

const prismaClientSingleton = () => {
  const databaseUrl = process.env.DATABASE_URL
  const adapter = new PrismaMssql(databaseUrl)
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis
const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
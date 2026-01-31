import { Hash } from '../src/shared/security/hash'
import { prisma } from '../src/lib/prisma'

async function main() {
  // Limpeza (ordem importa devido às FKs)
  await prisma.user.deleteMany()
  await prisma.role.deleteMany()

  const passwordHash = await Hash.hash('docker')

  // 1. Criar Roles usando os Enums do seu schema
  const adminRole = await prisma.role.create({
    data: { name: 'admin' },
  })

  const instructorRole = await prisma.role.create({
    data: { name: 'instructor' },
  })

  // 2. Criar Usuários vinculados às Roles
  await prisma.user.create({
    data: {
      username: 'admin_morimitsu',
      email: 'admin@morimitsu.com',
      password: passwordHash,
      role_id: adminRole.id,
    },
  })

  await prisma.user.create({
    data: {
      username: 'instructor_joao',
      email: 'instructor@morimitsu.com',
      password: passwordHash,
      role_id: instructorRole.id,
    },
  })

  console.log('Seed finalizada com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

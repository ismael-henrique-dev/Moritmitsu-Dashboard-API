import { prisma } from '../lib/prisma'

export class UserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    })
  }
}

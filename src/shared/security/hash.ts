import bcrypt from 'bcrypt'

export const Hash = {
  hash(password: string) {
    return bcrypt.hash(password, 10)
  },

  compare(password: string, hashed: string) {
    return bcrypt.compare(password, hashed)
  },
}

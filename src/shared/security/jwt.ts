import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!

// Defina a interface do que você guarda no token
export interface IPayload {
  sub: string
  role: string
  permissions: string[]
}

export const JWT = {
  sign(payload: object) {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: '10d',
    })
  },

  verify(token: string) {
    // Fazemos o cast para IPayload para o TS conhecer as propriedades
    return jwt.verify(token, JWT_SECRET) as IPayload
  },
}

import { Request, Response, NextFunction } from 'express'
import { JWT } from '../shared/security/jwt'

export function ensureAuthenticated(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new Error('Token not provided')
  }

  const [, token] = authHeader.split(' ')

  const payload = JWT.verify(token)

  req.user = {
    id: payload.sub,
    role: payload.role,
    permissions: payload.permissions,
  }

  next()
}

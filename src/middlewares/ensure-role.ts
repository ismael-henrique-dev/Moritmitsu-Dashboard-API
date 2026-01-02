import { NextFunction, Request, Response } from 'express'

export function ensureRole(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      throw new Error('Access denied')
    }

    return next()
  }
}

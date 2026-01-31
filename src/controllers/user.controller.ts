import { Request, Response } from 'express'
import { AuthService } from '../services/auth.service'
import { ZodError } from 'zod'
import { loginSchema } from '../schemas/auth'

export class AuthController {
  async handle(req: Request, res: Response) {
    const validation = loginSchema.safeParse(req.body)

    // ❌ ERRO DE VALIDAÇÃO
    if (!validation.success) {
      return res.status(400).json({
        message: validation.error.issues[0].message,
      })
    }

    try {
      const authService = new AuthService()
      const result = await authService.execute(validation.data)

      return res.status(200).json(result)
    } catch (error) {
      // ❌ CREDENCIAIS
      if (
        error instanceof Error &&
        error.message === 'Email ou senha incorretos'
      ) {
        return res.status(401).json({
          message: error.message,
        })
      }

      // ❌ ERRO INTERNO
      return res.status(500).json({
        message: 'Erro interno do servidor',
      })
    }
  }
}

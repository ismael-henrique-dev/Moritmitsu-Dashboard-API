import { Router } from 'express'
import { AuthController } from '../controllers/user.controller'

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login do usuário
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */

const authRoutes = Router()
// const controller = new AuthController()

const authController = new AuthController()

// Note o uso de .handle.bind(authController) para não perder o contexto do 'this'
authRoutes.post('/login', (req, res) => authController.handle(req, res))
// authRoutes.post('/forgot-password/email', controller.sendResetEmail)
// authRoutes.post('/forgot-password/code', controller.verifyCode)
// authRoutes.post('/forgot-password/new-password', controller.resetPassword)

export { authRoutes }

import { Router } from 'express'
import { authRoutes } from './auth.routes'

const routes = Router()

routes.use('/auth', authRoutes)
// routes.use('/students', studentRoutes)
// routes.use('/classes', classRoutes)
// routes.use('/account', accountRoutes)

export { routes }

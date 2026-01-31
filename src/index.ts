import express, { Application, Request, Response } from 'express'
import { routes } from './routes'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()

app.use(express.json())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(routes)

const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

import swaggerJsdoc from 'swagger-jsdoc'

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Morimitsu Dashboard API',
      version: '1.0.0',
      description: 'API de gestão de alunos, turmas e instrutores',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server',
      },
    ],
    components: {
      // securitySchemes: {
      //   bearerAuth: {
      //     type: 'http',
      //     scheme: 'bearer',
      //     bearerFormat: 'JWT',
      //   },
      // },
    },
    // security: [{ bearerAuth: [] }],
  },
  apis: [
  './src/routes/*.ts', 
  './src/controllers/*.ts',
  './src/routes/**/*.ts', // Caso tenha subpastas
  './src/controllers/**/*.ts'
],
})

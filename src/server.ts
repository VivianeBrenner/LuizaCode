import express from 'express'
import routes from './routes'
import './database/createConnection'
import swaggerUi from 'swagger-ui-express'

const app = express()
const port = 3000
const swaggerFile = require('../swagger_output.json')

app.use(express.json())
app.use(routes) 

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () => {
    console.log(`Server running on port ${port}\n Swagger: http://localhost:${port}/docs`)
})
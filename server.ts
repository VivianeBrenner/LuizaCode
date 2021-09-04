import express from 'express'

import routes from './routes'

const app = express()
const port = 3000

app.use(routes) 

app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`)
})
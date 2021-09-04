import { Router } from 'express'

import UsersController from './src/controllers/UsersController'

const routes = Router()

routes.post('/cadastro', UsersController.createUsersController)


export default routes
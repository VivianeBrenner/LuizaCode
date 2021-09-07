import { Router } from 'express'

import CustomersController from './controllers/CustomersController'

const routes = Router()

// Customers routes:
routes.get('/clientes', CustomersController.getAllCustomers)
routes.post('/clientes', CustomersController.createCustomer)
routes.get('/clientes/:clienteId', CustomersController.getCustomer)
routes.put('/clientes/:clienteId', CustomersController.updateCustomer)
routes.delete('/clientes/:clienteId', CustomersController.deleteCustomer)


export default routes


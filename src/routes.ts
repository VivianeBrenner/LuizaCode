import { Router } from 'express'

import {
  CustomersController,
  OrdersController,
  ProductsController,
  StoresController,
  ShoppingCartsController
} from './controllers'


const routes = Router()

// Customers routes:
routes.get('/clientes', CustomersController.getAllCustomers)
routes.post('/clientes', CustomersController.createCustomer)
routes.get('/clientes/:clienteId', CustomersController.getCustomer)
routes.put('/clientes/:clienteId', CustomersController.updateCustomer)
routes.delete('/clientes/:clienteId', CustomersController.deleteCustomer)

// Products routes:
routes.get('/produtos', ProductsController.getAllProducts)
routes.post('/produtos', ProductsController.createProduct)
routes.get('/produtos/:produtoId', ProductsController.getProduct)

// Stores routes:
routes.get('/lojas', StoresController.getAllStores)
routes.post('/lojas', StoresController.createStore)
routes.get('/lojas/:lojaId', StoresController.getStore)

export default routes


import { Router } from 'express'

import {
  CustomersController,
  // OrdersController,
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


// Customers and Orders routes:
// routes.get('/clientes/:clienteId/compras', OrdersController.getAllOrders)
// routes.post('/clientes/:clienteId/compras', OrdersController.createOrder) //histórico?
// routes.get('/clientes/:clienteId/compras/:comprasId', OrdersController.getOrder)
// routes.delete('/clientes/:clienteId/compras/:comprasId', OrdersController.deleteOrder)

// Customers and Shopping Cart routes:
routes.get('/clientes/:clienteId/carrinhos', ShoppingCartsController.getAllShoppingCarts)
routes.post('/clientes/:clienteId/carrinhos', ShoppingCartsController.createShoppingCart)
// routes.get('/clientes/:clienteId/carrinhos/:carrinhosId', ShoppingCartsController.getShoppingCart)
routes.put('/clientes/:clienteId/carrinhos/:carrinhosId', ShoppingCartsController.updateShoppingCart)
// routes.delete('/clientes/:clienteId/carrinho/:carrinhosId', ShoppingCartsControllerdeleteShoppingCarts)

// Products routes:
routes.get('/produtos', ProductsController.getAllProducts)
routes.post('/produtos', ProductsController.createProduct)
routes.get('/produtos/:produtoId', ProductsController.getProduct)

// Stores routes:
routes.get('/lojas', StoresController.getAllStores)
routes.post('/lojas', StoresController.createStore)
routes.get('/lojas/:lojaId', StoresController.getStore)

export default routes


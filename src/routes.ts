import { Router } from 'express'

import {
  CustomersController,
  OrdersController,
  ProductsController,
  StoresController,
  ShoppingCartsController
} from './controllers'


const routes = Router()

// Customer routes:
routes.get('/clientes', CustomersController.getAllCustomers)
routes.post('/clientes', CustomersController.createCustomer)
routes.get('/clientes/:clienteId', CustomersController.getCustomer)
routes.put('/clientes/:clienteId', CustomersController.updateCustomer)
routes.delete('/clientes/:clienteId', CustomersController.deleteCustomer)

// Store routes:
routes.get('/lojas', StoresController.getAllStores)
routes.post('/lojas', StoresController.createStore)
routes.get('/lojas/:lojaId', StoresController.getStore)
routes.put('/lojas/:lojaId', StoresController.updateStore)
routes.delete('/lojas/:lojaId', StoresController.deleteStore)

// Product routes:
routes.get('/produtos', ProductsController.getAllProducts)
routes.post('/produtos', ProductsController.createProduct)
routes.get('/produtos/:produtoId', ProductsController.getProduct)
routes.put('/produtos/:produtoId', ProductsController.updateProduct)
routes.delete('/produtos/:produtoId', ProductsController.deleteProduct)

// Shopping Cart routes:
routes.get('/clientes/:clienteId/carrinho', ShoppingCartsController.getCart)
routes.put('/clientes/:clienteId/carrinho', ShoppingCartsController.updateCart)
routes.delete('/clientes/:clienteId/carrinho', ShoppingCartsController.clearCart)
routes.put('/clientes/:clienteId/carrinho/checkout', ShoppingCartsController.checkout)

// Order routes:
routes.get('/clientes/:clienteId/pedidos', OrdersController.getAllOrdersForCustomer)
routes.get('/clientes/:clienteId/pedidos/:pedidoId', OrdersController.getOrderForCustomer)
routes.put('/clientes/:clienteId/pedidos/:pedidoId', OrdersController.releaseOrder)

export default routes

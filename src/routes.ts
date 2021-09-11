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

// Order routes:
routes.get('/clientes/:clienteId/pedidos', OrdersController.getAllOrdersForCustomer)
routes.get('/clientes/:clienteId/pedidos/:pedidoId', OrdersController.getOrderForCustomer)
routes.put('/clientes/:clienteId/pedidos/:pedidoId', OrdersController.releaseOrder)

// Product routes:
routes.get('/produtos', ProductsController.getAllProducts)
routes.post('/produtos', ProductsController.createProduct)
routes.get('/produtos/:produtoId', ProductsController.getProduct)
routes.put('/produtos/:produtoId', ProductsController.updateProduct)
routes.delete('/produtos/:produtoId', ProductsController.deleteProduct)

// Store routes:
routes.get('/lojas', StoresController.getAllStores)
routes.post('/lojas', StoresController.createStore)
routes.get('/lojas/:lojaId', StoresController.getStore)
routes.put('/lojas/:lojaId', StoresController.updateStore)
routes.delete('/lojas/:lojaId', StoresController.deleteStore)

// Shopping Cart routes:
routes.get('/carrinho/:clienteId', ShoppingCartsController.getCart)
routes.put('/carrinho/:clienteId', ShoppingCartsController.updateCart)
routes.delete('/carrinho/:clienteId', ShoppingCartsController.clearCart)
routes.put('/carrinho/:clienteId/checkout', ShoppingCartsController.checkout)

export default routes

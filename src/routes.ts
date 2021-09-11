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
routes.get('/clientes', /* #swagger.tags = ['Clientes'] */ CustomersController.getAllCustomers)
routes.post('/clientes', /* #swagger.tags = ['Clientes'] */ CustomersController.createCustomer)
routes.get('/clientes/:clienteId', /* #swagger.tags = ['Clientes'] */ CustomersController.getCustomer)
routes.put('/clientes/:clienteId', /* #swagger.tags = ['Clientes'] */ CustomersController.updateCustomer)
routes.delete('/clientes/:clienteId', /* #swagger.tags = ['Clientes'] */ CustomersController.deleteCustomer)

// Order routes:
routes.get('/clientes/:clienteId/pedidos', /* #swagger.tags = ['Clientes'] */ OrdersController.getAllOrdersForCustomer)
routes.get('/clientes/:clienteId/pedidos/:pedidoId', /* #swagger.tags = ['Clientes'] */ OrdersController.getOrderForCustomer)
routes.put('/clientes/:clienteId/pedidos/:pedidoId', /* #swagger.tags = ['Clientes'] */ OrdersController.releaseOrder)

// Product routes:
routes.get('/produtos', /* #swagger.tags = ['Produtos'] */ ProductsController.getAllProducts)
routes.post('/produtos', /* #swagger.tags = ['Produtos'] */ ProductsController.createProduct)
routes.get('/produtos/:produtoId', /* #swagger.tags = ['Produtos'] */ ProductsController.getProduct)
routes.put('/produtos/:produtoId', /* #swagger.tags = ['Produtos'] */ ProductsController.updateProduct)
routes.delete('/produtos/:produtoId', /* #swagger.tags = ['Produtos'] */ ProductsController.deleteProduct)

// Store routes:
routes.get('/lojas', /* #swagger.tags = ['Lojas'] */ StoresController.getAllStores)
routes.post('/lojas', /* #swagger.tags = ['Lojas'] */ StoresController.createStore)
routes.get('/lojas/:lojaId',/* #swagger.tags = ['Lojas'] */  StoresController.getStore)
routes.put('/lojas/:lojaId', /* #swagger.tags = ['Lojas'] */ StoresController.updateStore)
routes.delete('/lojas/:lojaId', /* #swagger.tags = ['Lojas'] */ StoresController.deleteStore)

// Shopping Cart routes:
routes.get('/carrinho/:clienteId', /* #swagger.tags = ['Carrinho'] */ ShoppingCartsController.getCart)
routes.put('/carrinho/:clienteId', /* #swagger.tags = ['Carrinho'] */ShoppingCartsController.updateCart)
routes.delete('/carrinho/:clienteId', /* #swagger.tags = ['Carrinho'] */ShoppingCartsController.clearCart)
routes.put('/carrinho/:clienteId/checkout', /* #swagger.tags = ['Carrinho'] */ ShoppingCartsController.checkout)

export default routes

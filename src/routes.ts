import { Router } from 'express'

import {
  CustomersController,
  OrdersController,
  ProductsController,
  StoresController,
  ShoppingCartsController
} from './controllers'

const routes = Router()

/////////////////////
// CUSTOMER ROUTES //
/////////////////////
routes.get('/clientes', 
  /* 
    #swagger.tags = ['Customers'] 
    #swagger.summary = 'Get all customers'  
    #swagger.responses[200] = {
      description: 'User list',
      schema: { $ref: '#/definitions/CustomerArray' }
    }
	*/	
 CustomersController.getAllCustomers
)
routes.post('/clientes', 
  /*
		#swagger.tags = ['Customers']
		#swagger.summary = 'Create a new customer'
    #swagger.parameters['New Customer'] = {
      in: 'body',
      type: 'object',
      description: 'Customer data',
      schema: { $ref: '#/definitions/CreateCustomer' }
    }
    #swagger.responses[200] = {
      description: 'User successfully created',
      schema: { $ref: '#/definitions/GetCustomer' }
    }
    #swagger.responses[500] = { description: 'Error happened while creating the new customer' }
	*/
  CustomersController.createCustomer
)
routes.get('/clientes/:clienteId', 
  /* 
    #swagger.tags = ['Customers'] 
    #swagger.summary = 'Get a specific customer'  
    #swagger.responses[404] = { description: 'Customer not found' }
    #swagger.responses[200] = {
      description: 'User retrieved',
      schema: { $ref: '#/definitions/GetCustomer' }
    }
	*/
  CustomersController.getCustomer
 )
routes.put('/clientes/:clienteId', 
	/*
		#swagger.tags = ['Customers']
		#swagger.summary = 'Update a specific customer'
    #swagger.parameters['Update Customer'] = {
      in: 'body',
      type: 'object',
      description: 'Customer new data',
      schema: { $ref: '#/definitions/CreateCustomer' }
    }
    #swagger.responses[200] = {
      description: 'User successfully updated',
      schema: { $ref: '#/definitions/GetCustomer' }
    }
    #swagger.responses[404] = { description: 'Customer not found' }
    #swagger.responses[500] = { description: 'Error happened while updating the customer' }
	*/
	CustomersController.updateCustomer
)
routes.delete('/clientes/:clienteId', 
	/*
		#swagger.tags = ['Customers']
		#swagger.summary = 'Delete a customer'
    #swagger.responses[204] = null
    #swagger.responses[500] = { description: 'Cannot delete customer because of FK relation' }
	*/
	CustomersController.deleteCustomer
)

////////////////////
//  ORDER ROUTES  //
////////////////////
routes.get('/clientes/:clienteId/pedidos', 
	/*
		#swagger.tags = ['Orders']
		#swagger.summary = 'Get all orders for a customer'
    #swagger.responses[404] = { description: 'Customer not found' }
    #swagger.responses[200] = {
      description: 'Orders retrieved',
      schema: { $ref: '#/definitions/GetOrderArray' }
    }
	*/
	OrdersController.getAllOrdersForCustomer
)
routes.get('/clientes/:clienteId/pedidos/:pedidoId', 
	/*
		#swagger.tags = ['Orders']
		#swagger.summary = 'Get a customer's specific order'
    #swagger.responses[404] = { description: 'Customer or Order not found' }
    #swagger.responses[200] = {
      description: 'Order retrieved',
      schema: { $ref: '#/definitions/GetPickedupOrder' }
    }
	*/
	OrdersController.getOrderForCustomer
)
routes.put('/clientes/:clienteId/pedidos/:pedidoId', 
	/*
		#swagger.tags = ['Orders']
		#swagger.summary = 'Change order status to "picked-up"'
    #swagger.parameters['Release Order'] = {
      in: 'body',
      type: 'object',
      description: 'Release order data',
      schema: { $ref: '#/definitions/ReleaseOrder' }
    }
    #swagger.responses[200] = {
      description: 'Order successfully updated',
      schema: { $ref: '#/definitions/GetPickedupOrder' }
    }
    #swagger.responses[404] = { description: 'Customer or Order not found' }
    #swagger.responses[500] = { description: 'Error happened while updating the order status' }
	*/
	OrdersController.releaseOrder
)

////////////////////
// PRODUCT ROUTES //
////////////////////
routes.get('/produtos', 
	/*
		#swagger.tags = ['Products']
		#swagger.summary = 'Get all products'
    #swagger.responses[200] = {
      description: 'Products list',
      schema: { $ref: '#/definitions/ProductArray' }
    }
	*/
	ProductsController.getAllProducts
)
routes.post('/produtos', 
	/*
		#swagger.tags = ['Products']
		#swagger.summary = 'Create new product'
    #swagger.parameters['New Product'] = {
      in: 'body',
      type: 'object',
      description: 'Product data',
      schema: { $ref: '#/definitions/CreateProduct' }
    }
    #swagger.responses[200] = {
      description: 'Product successfully created',
      schema: { $ref: '#/definitions/GetProduct' }
    }
    #swagger.responses[500] = { description: 'Error happened while creating the new product' }
	*/
	ProductsController.createProduct
)
routes.get('/produtos/:produtoId', 
	/*
		#swagger.tags = ['Products']
		#swagger.summary = 'Get a specific product'
    #swagger.responses[404] = { description: 'Product not found' }
    #swagger.responses[200] = {
      description: 'Product retrieved',
      schema: { $ref: '#/definitions/GetProduct' }
    }
	*/
	ProductsController.getProduct
)
routes.put('/produtos/:produtoId', 
	/*
		#swagger.tags = ['Products']
		#swagger.summary = 'Update a specific product'
    #swagger.parameters['Update Product'] = {
      in: 'body',
      type: 'object',
      description: 'Product new data',
      schema: { $ref: '#/definitions/CreateProduct' }
    }
    #swagger.responses[200] = {
      description: 'Product successfully updated',
      schema: { $ref: '#/definitions/GetProduct' }
    }
    #swagger.responses[404] = { description: 'Product not found' }
    #swagger.responses[500] = { description: 'Error happened while updating the product' }
	*/
	ProductsController.updateProduct
)
routes.delete('/produtos/:produtoId', 
	/*
		#swagger.tags = ['Products']
		#swagger.summary = 'Delete a specific product'
    #swagger.responses[204] = null
    #swagger.responses[500] = { description: 'Cannot delete product because of FK relation' }
	*/
	ProductsController.deleteProduct
)

//////////////////
// STORE ROUTES //
//////////////////
routes.get(
  '/lojas', 
  /* 
    #swagger.tags = ['Stores'] 
    #swagger.summary = 'Get all stores'
    #swagger.responses[200] = {
      description: 'Store list',
      schema: { $ref: '#/definitions/StoreArray' }
    }
	*/
  StoresController.getAllStores
)
routes.post('/lojas', 
	/*
		#swagger.tags = ['Stores']  
    #swagger.summary = 'Create a new store'
    #swagger.parameters['New Store'] = {
      in: 'body',
      type: 'object',
      description: 'Store data',
      schema: { $ref: '#/definitions/CreateStore' }
    }
    #swagger.responses[200] = {
      description: 'Store successfully created',
      schema: { $ref: '#/definitions/GetStore' }
    }
    #swagger.responses[500] = { description: 'Error happened while creating the new store.' }
	*/
	StoresController.createStore
)
routes.get('/lojas/:lojaId',
  /*
		#swagger.tags = ['Stores']  
    #swagger.summary = 'Get a specific store'
    #swagger.responses[200] = {
      description: 'Store retrieved',
      schema: { $ref: '#/definitions/GetStore' }
    }
    #swagger.responses[404] = { description: 'Store not found' }
	*/
  StoresController.getStore
)
routes.put('/lojas/:lojaId', 
	/*
		#swagger.tags = ['Stores']  
    #swagger.summary = 'Update a specific store' 
    #swagger.parameters['Update Store'] = {
      in: 'body',
      type: 'object',
      description: 'Store new data',
      schema: { $ref: '#/definitions/CreateStore' }
    }
    #swagger.responses[200] = {
      description: 'Store updated successfully',
      schema: { $ref: '#/definitions/GetStore' }
    }
    #swagger.responses[404] = { description: 'Store not found' }
    #swagger.responses[500] = { description: 'Error happened while updating the store.' }
	*/
	StoresController.updateStore
)
routes.delete('/lojas/:lojaId', 
	/*
		#swagger.tags = ['Stores']  
    #swagger.summary = 'Delete a specific store' 
    #swagger.responses[204] = null
    #swagger.responses[500] = { description: 'Cannot delete store because of FK relation' }
  */
	StoresController.deleteStore
)

//////////////////////////
// SHOPPING CART ROUTES //
//////////////////////////
routes.get('/clientes/:clienteId/carrinho', 
	/*
		#swagger.tags = ['Shopping Cart']
		#swagger.summary = "Get a customer's shopping cart"
    #swagger.responses[404] = { description: 'Customer not found' }
    #swagger.responses[200] = {
      description: 'List of cart items',
      schema: { $ref: '#/definitions/CartItemArray' }
    }
	*/
	ShoppingCartsController.getCart
)
routes.put('/clientes/:clienteId/carrinho', 
	/*
		#swagger.tags = ['Shopping Cart']
		#swagger.summary = 'Update a customer's shopping cart'
    #swagger.parameters['Update Shopping Cart'] = {
      in: 'body',
      type: 'object',
      description: 'Shopping cart new items',
      schema: { $ref: '#/definitions/AddCartItemArray' }
    }
    #swagger.responses[200] = {
      description: 'List of cart items',
      schema: { $ref: '#/definitions/CartItemArray' }
    }
    #swagger.responses[500] = { description: 'An unknown error happenned. Try again please.' }
	*/
  ShoppingCartsController.updateCart
)
routes.delete('/clientes/:clienteId/carrinho', 
	/*
		#swagger.tags = ['Shopping Cart']
		#swagger.summary = "Empty a customer's shopping cart"
    #swagger.responses[204] = ''
	*/
  ShoppingCartsController.clearCart
)
routes.put('/clientes/:clienteId/carrinho/checkout', 
	/*
		#swagger.tags = ['Shopping Cart']
		#swagger.summary = 'Checkout a customer'
    #swagger.parameters['Checkout'] = {
      in: 'body',
      type: 'object',
      description: 'Checkout current cart',
      schema: { $ref: '#/definitions/Checkout' }
    }
    #swagger.responses[403] = { description: 'Your cart is currently empty. Nothing to be checked out.' }
    #swagger.responses[404] = { description: 'Error! Malformed request body.' }
    #swagger.responses[500] = { description: 'Error. Please check you have the right store Id.' }
    #swagger.responses[200] = {
      description: 'List of cart items',
      schema: { $ref: '#/definitions/CartItemArray' }
    }
	*/
	ShoppingCartsController.checkout
)

export default routes

import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { CartItem } from '../entities/CartItem'
import { Customer } from '../entities/Customer'
import { Order } from '../entities/Order'
import { OrderItem } from '../entities/OrderItem'
import { Store } from '../entities/Store'
import CartItemRepository  from '../repositories/CartItemRepository'
import OrderItemRepository from '../repositories/OrderItemRepository'


const ShoppingCartsController = {
 
    async getCart(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(CartItemRepository)
        const clientCart = await repository.find({relations: ["product"], where: {"customerId": customerId}})

        return res.status(200).json(clientCart.map(cartItem => {
            let item = cartItem.product
            item["amount"] = cartItem.amount
            return item
        }))
    },

    async updateCart(req: Request, res: Response) {
        if (!req.body || !req.body.produtos || !Array.isArray(req.body.produtos)) {
            return res.status(404).json({errorMessage: "Error! Malformed request body."})
        }
        const customerId = req.params.clienteId
        let updatedItems = Array<CartItem>()

        req.body.produtos.forEach(product => {
            // Making sure that for each product we receive the "produtotId" and the "quantidade"
            if (product.produtoId === undefined || product.quantidade === undefined) {
                return res.status(404).json({errorMessage: "Error! Malformed request body."})
            }
            // Checking each product quantity is 1
            if (product.quantidade !== 1) {
                return res.status(404).json({errorMessage: "Error! Each product can just be purchase once."})
            }

            let newItem = new CartItem()
            newItem.amount = product.quantidade
            newItem.productId = product.produtoId
            newItem.customerId = Number(customerId)
            
            updatedItems.push(newItem)
        });

        // Remove current items from cart and add the updated cart items
        const repository = getCustomRepository(CartItemRepository)
        try {
            const cartItems = await repository.find({where: {"customerId": customerId}})
            if (cartItems) {
                await repository.remove(cartItems)
            }
            await repository.save(updatedItems)
        } catch (error) {
            console.log(error)
            return res.status(404).json({errorMessage: "An unknown error happenned. Try again please."})
        }

        return res.status(200).json(updatedItems)
    },

    // Remove all cart items
    async clearCart(req: Request, res: Response) {

        const customerId = req.params.clienteId
        const repository = getCustomRepository(CartItemRepository)
        const cartItems = await repository.find({where: {"customerId": customerId}})
        if (cartItems) {
            repository.remove(cartItems)
        }

        return res.status(200).json([])
    },

    // Remove items from cart and create an order out of them
    async checkout(req: Request, res: Response) {
        if (!req.body || !req.body.storeId) {
            return res.status(404).json({errorMessage: "Error! Malformed request body."})
        }

        const customerId = req.params.clienteId
        const repository = getCustomRepository(CartItemRepository)
        const cartItems = await repository.find({relations: ["product"], where: {"customerId": customerId}})
        
        if (!cartItems || cartItems.length === 0) {
            return res.status(404).json({errorMessage: "Your cart is currently empty. Nothing to be checked out."})
        }

        let order = new Order()
        order.datePlaced = new Date()
        let customer = new Customer()
        customer.id = Number(customerId)
        order.customer = customer
        let store = new Store()
        store.id = Number(req.body.storeId)
        order.store = store

        try {
            await order.save()
            // Convert cart products to OrderItem array
            let currentItems = Array<OrderItem>()
            cartItems.forEach(cartItem => {
                const orderItem = new OrderItem()
                orderItem.orderId = order.id
                orderItem.productId = cartItem.product.id
                orderItem.price = cartItem.product.price
                orderItem.amount = cartItem.amount
                orderItem.productName = cartItem.product.name
                currentItems.push(orderItem)
            })
            
            if (cartItems) {
                repository.remove(cartItems)
            }

            const itemRepository = getCustomRepository(OrderItemRepository)
            await itemRepository.save(currentItems)
            order.orderItems = currentItems
            return res.status(200).json(order)
        } catch (error) {
            return res.status(404).json({errorMessage: "Error. Please check you have the right store Id."})
        }
        
    }
}

export default ShoppingCartsController
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { Order } from '../entities/Order'
import CustomerRepository from '../repositories/CustomerRepository'
import OrderRepository  from '../repositories/OrderRepository'


const OrdersController = {
    
    // Get all orders for a specific customer
    async getAllOrdersForCustomer(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(CustomerRepository)
        const foundCustomer = await repository.findOne(customerId, {relations: ["orders"]})

        if (!foundCustomer) {
            return res.status(404).json({errorMessage: "Customer not found"})
        }

        // Add total to orders and subtotals to each order's items
        const foundOrders = OrdersController.appendAmountsToOrders(foundCustomer.orders)

        return res.status(200).json(foundOrders)
    },

    // Get a specific order for a specific customer
    async getOrderForCustomer(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const orderId = req.params.pedidoId
        const repository = getCustomRepository(OrderRepository)
        const foundOrder = await repository.findOne(orderId, {
            where: { customer: { id: customerId } }
        })

        if (!foundOrder) {
            return res.status(404).json({errorMessage: "Order not found"})
        }

        return res.status(200).json(foundOrder)
    },

    // Release a specific order for a spefic customer
    async releaseOrder(req: Request, res: Response) {
        // Make sure that the client is submitting the isPickedup and that it's set to true
        if (!req.body || !req.body.isPickedup || req.body.isPickedup !== true) {
            return res.status(404).json({errorMessage: "'isPickedup' must be submitted as True."})
        }

        const customerId = req.params.clienteId
        const orderId = req.params.pedidoId
        const repository = getCustomRepository(OrderRepository)
        const foundOrder = await repository.findOne(orderId, {
            where: { customer: { id: customerId } }
        })
        
        if (!foundOrder) {
            return res.status(404).json({errorMessage: "Order not found"})
        }

        if (foundOrder.isPickedup == 1) {
            return res.status(404).json({errorMessage: "This order has already been picked up."})
        }

        foundOrder.isPickedup = 1;
        foundOrder.datePickedup = new Date();
        foundOrder.save()

        return res.status(200).json(foundOrder)
    },

    // Total and subtotal for order's items
    appendAmountsToOrders(orders: Order[]) {
        let formattedOrders = orders.map(order => {
            let orderTotal = 0.0
            let formattedItems = order.orderItems.map(item => {
                const subTotal = item.price * item.amount
                orderTotal += subTotal
                return {
                    "id": item.productId,
                    "name": item.productName,
                    "price": Number(item.price),
                    "amount": item.amount,
                    "subTotal": subTotal
                }
            })
            return {
                "id": order.id,
                "total": orderTotal,
                "store": order.store,
                "isPickedup": order.isPickedup,
                "datePlaced": order.datePlaced,
                "datePickedup": order.datePickedup,
                "items": formattedItems
            }
        })

        return formattedOrders
    }
}
export default OrdersController
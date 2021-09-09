import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import OrderRepository  from '../repositories/OrderRepository'


const OrdersController = {
 
    async getAllCustomers(req: Request, res: Response) {
        const repository = getCustomRepository(OrderRepository)
        const allCustomers = await repository.find()

        return res.status(200).json(allCustomers)
    },

    async getCustomer(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(OrderRepository)
        const foundCustomer = await repository.findOne(customerId)

        if (!foundCustomer) {
            return res.status(404).json({errorMessage: "Customer not found"})
        }
        
        return res.status(200).json(foundCustomer)
    },

    async createCustomer(req: Request, res: Response) {
        // getting body from request
        // processing it and validating it
        // adding it to the database
        // and finally returning the response as a confirmation
        // otherwise throw an exception (e.g. registering a user with previously used email)

        const newCustomerData = req.body
        const repository = getCustomRepository(OrderRepository)
        try {
            const newCustomer = await repository.save(newCustomerData)
            console.log(newCustomer)
            return res.status(200).json(newCustomerData)
        } catch (e) {
            return res.status(404).json({errorMessage: "Unable to create customer. Malformed data."})
        }
    },

    async updateCustomer(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(OrderRepository)

        const existingCustomer = await repository.findOne(customerId)
        if (!existingCustomer) {
            return res.status(404).json({errorMessage: "Customer not found"})
        }

        const customerNewData = req.body

        try {
            await repository.update(customerId, customerNewData)
            for (let key in customerNewData) {
                if (key in existingCustomer) {
                    existingCustomer[key] = customerNewData[key]
                }
            }
            return res.status(200).json(existingCustomer)
        } catch (e) {
            return res.status(404).json({errorMessage: "Error happened while updating the customer"})
        }
    },

    async deleteCustomer(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(OrderRepository)
        await repository.delete(customerId)

        return res.status(200).json()
    }

}
export default OrdersController
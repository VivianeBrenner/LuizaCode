import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import CustomerRepository  from '../repositories/CustomerRepository'


const CustomersController = {
 
    // Get all customer
    async getAllCustomers(req: Request, res: Response) {
        const repository = getCustomRepository(CustomerRepository)
        const allCustomers = await repository.find()

        return res.status(200).json(allCustomers)
    },

    // Get a specific customer
    async getCustomer(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(CustomerRepository)
        const foundCustomer = await repository.findOne(customerId)

        if (!foundCustomer) {
            return res.status(404).json({errorMessage: "Customer not found"})
        }
        
        return res.status(200).json(foundCustomer)
    },

    // Create a new customer
    async createCustomer(req: Request, res: Response) {
        const newCustomerData = req.body
        const repository = getCustomRepository(CustomerRepository)
        try {
            const newCustomer = await repository.save(newCustomerData)
            return res.status(200).json(newCustomer)
        } catch (e) {
            return res.status(404).json({errorMessage: "Unable to create customer. Malformed data."})
        }
    },

    // Update a specific customer
    async updateCustomer(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(CustomerRepository)

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

    // Delete a specific customer
    async deleteCustomer(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(CustomerRepository)
        await repository.delete(customerId)

        return res.status(200).json()
    }

}
export default CustomersController
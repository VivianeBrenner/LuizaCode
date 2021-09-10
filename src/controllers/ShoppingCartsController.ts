import { Request, Response } from 'express'
import { getCustomRepository, getConnection } from 'typeorm'
import ShoppingCartRepository  from '../repositories/ShoppingCartRepository'
import ProductRepository from '../repositories/ProductRepository'
import CustomerRepository  from '../repositories/CustomerRepository'


const ShoppingCartsController = {
 
    async getAllShoppingCarts(_req: Request, res: Response) {
        const repository = getCustomRepository(ShoppingCartRepository)
        const ShoppingCarts = await repository.find()

        return res.status(200).json(ShoppingCarts)
    },

    async getShoppingCart(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(ShoppingCartRepository)
        const foundCustomer = await repository.findOne(customerId)

        if (!foundCustomer) {
            return res.status(404).json({errorMessage: "Customer not found"})
        }
        
        return res.status(200).json(foundCustomer)
    },

    async createShoppingCart(req: Request, res: Response) {
        // getting body from request
        // processing it and validating it
        // adding it to the database
        // and finally returning the response as a confirmation
        // otherwise throw an exception (e.g. registering a user with previously used email)

        const newShoppingCartData = req.body
        const repository = getCustomRepository(ShoppingCartRepository)
                                                    
        try {
            const newShoppingCarts = await repository.save(newShoppingCartData)
            console.log(newShoppingCarts)
            // função => somar o valor total dos produtos 
            return res.status(200).json(newShoppingCarts)
        } catch (e) {
            return res.status(404).json({errorMessage: "Unable to create customer. Malformed data."})

        }
    },

    async updateShoppingCart(req: Request, res: Response) {
        const shoppingCartId = req.params.carrinhoId
        const repository = getCustomRepository(ShoppingCartRepository)

        const existingShoppingCart = await repository.findOne(shoppingCartId)
        if (!existingShoppingCart) {
            return res.status(404).json({errorMessage: "Customer not found"})
        }

        const shoppingCartNewData = req.body

        try {
            await repository.update(shoppingCartId, shoppingCartNewData)
            for (let key in shoppingCartNewData) {
                if (key in existingShoppingCart) {
                    existingShoppingCart[key] = shoppingCartNewData[key]
                }
            }
            return res.status(200).json(existingShoppingCart)
        } catch (e) {
            return res.status(404).json({errorMessage: "Error happened while updating the customer"})
        }
    },

    async deleteShoppingCart(req: Request, res: Response) {
        const customerId = req.params.clienteId
        const repository = getCustomRepository(ShoppingCartRepository)
        await repository.delete(customerId)

        return res.status(200).json()
    }

}
export default ShoppingCartsController
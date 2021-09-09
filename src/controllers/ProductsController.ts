import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import ProductRepository from '../repositories/ProductRepository'


const ProductsController = {
 
    async getAllProducts(_req: Request, res: Response) {
        const repository = getCustomRepository(ProductRepository)
        const allProducts = await repository.find()

        return res.status(200).json(allProducts)
    },

    async getProduct(req: Request, res: Response) {
        const productId = req.params.produtoId
        const repository = getCustomRepository(ProductRepository)
        const foundProduct = await repository.findOne(productId)

        if (!foundProduct) {
            return res.status(404).json({errorMessage: "Customer not found"})
        }
        
        return res.status(200).json(foundProduct)
    },

    async createProduct(req: Request, res: Response) {
        // getting body from request
        // processing it and validating it
        // adding it to the database
        // and finally returning the response as a confirmation
        // otherwise throw an exception (e.g. registering a user with previously used email)

        const newProductData = req.body
        const repository = getCustomRepository(ProductRepository)
        try {
            const newProduct= await repository.save(newProductData)
            console.log(newProduct)
            return res.status(200).json(newProductData)
        } catch (e) {
            return res.status(404).json({errorMessage: "Unable to create product. Malformed data."})
        }
    },

    // async updateCustomer(req: Request, res: Response) {
    //     const customerId = req.params.clienteId
    //     const repository = getCustomRepository(ProductRepository)

    //     const existingCustomer = await repository.findOne(customerId)
    //     if (!existingCustomer) {
    //         return res.status(404).json({errorMessage: "Customer not found"})
    //     }

    //     const customerNewData = req.body

    //     try {
    //         await repository.update(customerId, customerNewData)
    //         for (let key in customerNewData) {
    //             if (key in existingCustomer) {
    //                 existingCustomer[key] = customerNewData[key]
    //             }
    //         }
    //         return res.status(200).json(existingCustomer)
    //     } catch (e) {
    //         return res.status(404).json({errorMessage: "Error happened while updating the customer"})
    //     }
    // },

    // async deleteCustomer(req: Request, res: Response) {
    //     const customerId = req.params.clienteId
    //     const repository = getCustomRepository(ProductRepository)
    //     await repository.delete(customerId)

    //     return res.status(200).json()
    // }

}
export default ProductsController
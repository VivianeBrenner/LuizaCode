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
        const newProductData = req.body
        const repository = getCustomRepository(ProductRepository)
        try {
            const newProduct= await repository.save(newProductData)
            return res.status(200).json(newProduct)
        } catch (e) {
            return res.status(404).json({errorMessage: "Unable to create product. Malformed data."})
        }
    },

    async updateProduct(req: Request, res: Response) {
        const productId = req.params.produtoId
        const repository = getCustomRepository(ProductRepository)

        const product = await repository.findOne(productId)
        if (!product) {
            return res.status(404).json({errorMessage: "Product not found"})
        }

        const productNewData = req.body

        try {
            await repository.update(productId, productNewData)
            for (let key in productNewData) {
                if (key in product) {
                    product[key] = productNewData[key]
                }
            }
            return res.status(200).json(product)
        } catch (e) {
            return res.status(404).json({errorMessage: "Error happened while updating the product"})
        }
    },

    async deleteProduct(req: Request, res: Response) {
        const productId = req.params.produtoId
        const repository = getCustomRepository(ProductRepository)
        try {
            await repository.delete(productId)
            return res.status(204).json()
        } catch (e) {
            return res.status(500).json({errorMessage: "Cannot delete product because of FK relation."})
        }
    }

}
export default ProductsController
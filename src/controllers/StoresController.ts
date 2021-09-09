import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import StoreRepository from '../repositories/StoreRepository'

const StoresController = {
 
    async getAllStores(_req: Request, res: Response) {
        const repository = getCustomRepository(StoreRepository)
        const allStores = await repository.find()

        return res.status(200).json(allStores)
    },

    async getStore(req: Request, res: Response) {
        const storeId = req.params.lojaId
        const repository = getCustomRepository(StoreRepository)
        const foundStore = await repository.findOne(storeId)

        if (!foundStore) {
            return res.status(404).json({errorMessage: "Store not found"})
        }
        
        return res.status(200).json(foundStore)
    },

    async createStore(req: Request, res: Response) {
        // getting body from request
        // processing it and validating it
        // adding it to the database
        // and finally returning the response as a confirmation
        // otherwise throw an exception (e.g. registering a user with previously used email)

        const newStorerData = req.body
        const repository = getCustomRepository(StoreRepository)
        try {
            const newStore = await repository.save(newStorerData)
            console.log(newStore)
            return res.status(200).json(newStorerData)
        } catch (e) {
            return res.status(404).json({errorMessage: "Unable to create store. Malformed data."})
        }
    },
}

export default StoresController
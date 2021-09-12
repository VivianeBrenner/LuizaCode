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

        const newStoreData = req.body
        const repository = getCustomRepository(StoreRepository)
        try {
            const newStore = await repository.save(newStoreData)
            return res.status(200).json(newStore)
        } catch (e) {
            return res.status(404).json({errorMessage: "Unable to create store. Malformed data."})
        }
    },

    async updateStore(req: Request, res: Response) {
        const storeId = req.params.lojaId
        const repository = getCustomRepository(StoreRepository)

        const store = await repository.findOne(storeId)
        if (!store) {
            return res.status(404).json({errorMessage: "Store not found"})
        }

        const storeNewData = req.body

        try {
            await repository.update(store, storeNewData)
            for (let key in storeNewData) {
                if (key in store) {
                    store[key] = storeNewData[key]
                }
            }
            return res.status(200).json(store)
        } catch (e) {
            return res.status(404).json({errorMessage: "Error happened while updating the store."})
        }
    },

    async deleteStore(req: Request, res: Response) {
        const storeId = req.params.lojaId
        const repository = getCustomRepository(StoreRepository)
        await repository.delete(storeId)

        return res.status(200).json()
    }
}

export default StoresController
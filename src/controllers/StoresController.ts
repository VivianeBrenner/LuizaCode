import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import StoreRepository from '../repositories/StoreRepository'

const StoresController = {
    
    // Get all stores
    async getAllStores(_req: Request, res: Response) {
        const repository = getCustomRepository(StoreRepository)
        const allStores = await repository.find()
        return res.status(200).json(allStores)
    },

    // Get a specific store
    async getStore(req: Request, res: Response) {
        const storeId = req.params.lojaId
        const repository = getCustomRepository(StoreRepository)
        const foundStore = await repository.findOne(storeId)

        if (!foundStore) {
            return res.status(404).json({errorMessage: "Store not found"})
        }

        return res.status(200).json(foundStore)
    },

    // Create a store
    async createStore(req: Request, res: Response) {
        const newStoreData = req.body
        const repository = getCustomRepository(StoreRepository)
        try {
            const newStore = await repository.save(newStoreData)
            return res.status(200).json(newStore)
        } catch (e) {
            return res.status(500).json({errorMessage: "Unable to create store. Malformed data."})
        }
    },

    // Update a store
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
            return res.status(500).json({errorMessage: "Error happened while updating the store."})
        }
    },

    // Delete a store
    async deleteStore(req: Request, res: Response) {
        const storeId = req.params.lojaId
        const repository = getCustomRepository(StoreRepository)
        try {
            await repository.delete(storeId)
            return res.status(204).json()
        } catch (e) {
            return res.status(500).json({errorMessage: "Cannot delete store because of related existing orders."})
        }
    }
}

export default StoresController
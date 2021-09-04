import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

export default {
  async createUsersController( req: Request, res: Response) {
  console.log(req.body)
  const { name, email, password } = req.body
  
  let user = { name, email, password }
  console.log(user)
  const repository = getCustomRepository(UsersRepository)
  
  user = await repository.save(user)

  return res.status(201).json({ user })
  }
}

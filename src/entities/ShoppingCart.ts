import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm'
import { Product } from './Product'

@Entity('shopping_carts')
export class ShoppingCart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  total: number

  @ManyToMany(() => Product, product => product.shoppingCart)
  @JoinTable()
  products: Product[]



}
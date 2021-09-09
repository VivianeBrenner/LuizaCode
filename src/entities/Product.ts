import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm'
import { Store } from './Store'
import { ShoppingCart } from './ShoppingCart' 

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  image: string
  
  @Column()
  price: number
  
  @ManyToMany(() => Store, store => store.products)
  @JoinTable()
  stores: Store[]

  @ManyToMany(() => ShoppingCart, shoppingCart => shoppingCart.products)
  shoppingCart: ShoppingCart[] 

}
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, JoinTable } from 'typeorm'
import { Order } from './Order'
import { CartItem } from './CartItem'

@Entity('customers')
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string
  
  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => Order, order => order.customer)
  orders: Order[]

  @OneToMany(() => CartItem, cartItem => cartItem.customer)
  cartItems: CartItem[]
}
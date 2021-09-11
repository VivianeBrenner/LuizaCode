import { 
  Entity, 
  Column, 
  BaseEntity, 
  ManyToOne,
  JoinColumn, 
  PrimaryColumn
} from 'typeorm'

import { Customer } from './Customer'
import { Product } from './Product'

@Entity('cart_items')
export class CartItem extends BaseEntity {  

@PrimaryColumn('int') customerId: number
@PrimaryColumn('int') productId: number

@Column("int")
amount: number

@ManyToOne(() => Customer, customer => customer.cartItems)
@JoinColumn({name: "customerId"})
customer: Customer

@ManyToOne(() => Product, product => product.orderItems)
@JoinColumn({name: "productId"})
product: Product

}
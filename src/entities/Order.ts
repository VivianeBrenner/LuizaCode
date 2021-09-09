import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Customer } from './Customer'
import { ShoppingCart } from './ShoppingCart'

@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: string

  @CreateDateColumn({ name: "order_dt" })
  orderDate: Date
  
  @Column()
  payment: string
  
  @ManyToOne(() => Customer, customer => customer.orders)
  customer: Customer

  @OneToOne(() => ShoppingCart)
    @JoinColumn()
    shoppingCart: ShoppingCart
}
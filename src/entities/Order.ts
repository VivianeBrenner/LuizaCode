import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable, UpdateDateColumn } from 'typeorm'
import { Customer } from './Customer'
import { OrderItem } from './OrderItem'
import { Store } from './Store'

@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "is_pickedup", default: '0', type: 'smallint' })
  isPickedup: number

  @CreateDateColumn({ name: "date_placed" })
  datePlaced: Date

  @Column({ type: 'date', name: "date_pickedup", nullable: true, default: null })
  datePickedup: Date
  
  @ManyToOne(() => Customer, customer => customer.orders)
  customer: Customer

  @ManyToOne(() => Store, store => store.orders, { cascade:true, eager: true })
  store: Store

  @OneToMany(() => OrderItem, orderItem => orderItem.order, { cascade:true, eager: true})
  @JoinColumn({name: 'orderId'})
  orderItems: OrderItem[]

  addOrderItem(newOrderItem: OrderItem) {
    if (this.orderItems == null) {
      this.orderItems = new Array<OrderItem>()
    }
    this.orderItems.push(newOrderItem)
  }
}
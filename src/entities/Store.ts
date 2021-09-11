import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { Order } from './Order'

@Entity('stores')
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  phone: string
  
  @Column()
  address: string

  @OneToMany(() => Order, order => order.store)
  orders: Order[];
}

import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { Order } from './Order'

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

}
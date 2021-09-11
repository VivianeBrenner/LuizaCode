import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, JoinColumn, OneToMany } from 'typeorm'
import { OrderItem } from './OrderItem'

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ name: "image_url" })
  imageUrl: string

  @Column("decimal", { precision: 7, scale: 2 })
  price: number

  @OneToMany(() => OrderItem, orderItem => orderItem.product)
  @JoinColumn({name: "productId"})
  orderItems: OrderItem[]
}
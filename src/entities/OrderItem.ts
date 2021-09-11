import { 
    Entity, 
    Column, 
    BaseEntity, 
    ManyToOne,
    JoinColumn, 
    PrimaryColumn
} from 'typeorm'
import { Order } from './Order'
import { Product } from './Product'

@Entity('order_products')
export class OrderItem extends BaseEntity {  

  @PrimaryColumn('int') orderId: number
  @PrimaryColumn('int') productId: number
  
  @Column()
  productName: string

  @Column("decimal", { precision: 7, scale: 2 })
  price: number

  @Column("int")
  amount: number

  @ManyToOne(() => Order, order => order.orderItems)
  @JoinColumn({name: "orderId"})
  order: Order

  @ManyToOne(() => Product, product => product.orderItems)
  @JoinColumn({name: "productId"})
  product: Product

}
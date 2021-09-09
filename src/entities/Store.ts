import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany } from 'typeorm'
import { Product } from './Product'

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

  @ManyToMany(() => Product, product => product.stores)
  products: Product[];
    
}

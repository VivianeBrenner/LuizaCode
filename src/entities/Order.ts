import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @CreateDateColumn({ name: "order_dt" })
  orderDate: Date;
  
  @Column()
  payment: string;

  
  // id_customer;


  // id_shopping-cart;
}
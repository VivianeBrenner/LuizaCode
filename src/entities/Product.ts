import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;
  
  @Column()
  price: number;

  
  // id_store
}
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('stores')
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;
  
  @Column()
  address: string;
}
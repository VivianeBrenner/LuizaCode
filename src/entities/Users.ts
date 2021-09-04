import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('users_table')
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  email: string;

  @Column()
  password: string;
}
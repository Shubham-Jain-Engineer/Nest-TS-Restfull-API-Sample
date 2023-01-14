import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ReportEntity {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  Price: Number;
}
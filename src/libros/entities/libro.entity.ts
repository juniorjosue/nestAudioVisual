import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Libro {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  descripcion: string;

}
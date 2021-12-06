
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;
    @Column()
    genero_id: number;
    @Column()
    user_id: number;
    @Column()
    valoracion_id: number;
    @Column()
    sinopsis: string;
    @Column()
    imagen: string;
    @Column()
    fecha_visto: string;
    @Column()
    created_at: string;
    @Column()
    updated_at: string;


}

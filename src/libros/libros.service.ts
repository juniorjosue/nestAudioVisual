import { LibroI } from './interface/libro.interface';
import { Injectable } from '@nestjs/common';
import { Libro } from './entities/libro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';


@Injectable()
export class LibrosService {

    // injectamos el entity "Libro"
    constructor(
        @InjectRepository(Libro)
        private libroRepository: Repository<Libro>
    ) 
    { }

    
    /*comienza el crud*/

    async buscartodos():Promise<Libro[]> {
        // return " todos-service"
        
        return await this.libroRepository.find();
    }

    async buscarlibro(id:number) :Promise<Libro>{
        // return "buscar libro-service"
        // return await this.libroRepository.find({_id: id});
        return await this.libroRepository.findOne(id);
    }

    async crearlibro(libro: LibroI):Promise<Libro> {
        return await this.libroRepository.save(libro);
        // const nuevo= new this.libroRepository(libro);
        // return await nuevo.save();
    }

    async modificarlibro(id:number, libro:LibroI):Promise<UpdateResult> {
        // return "modificar libro-service"
        //1posibilidad
        return await this.libroRepository.update(id, libro);

        //opcion2
        // const libroActualizado= await this.buscarlibro(id);
        // return await this.libroRepository.save(libroActualizado);
    }

    async deletelibro(id:number) : Promise<DeleteResult> {
        // return "delete libro-service"
        return await this.libroRepository.delete(id);
    }
    


}

import { LibrosService } from './libros.service';
import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { crearLibroDto } from './dto/crear-libro';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('libros') 
@Controller('libros')
export class LibrosController {

   

    constructor(private readonly LibrosService:LibrosService){}
    /*para buscar*/


    @Get(':id')
    buscarUNo(@Param('id') idLibro:number):  Promise<any>{
        return this.LibrosService.buscarlibro(idLibro);
    }   
/*para realizar crud*/
    @Get()
    Todoslibros(): Promise<any>{
        /*para recuperar todos los libros */
        return this.LibrosService.buscartodos();

    }    
    @Post()
    Crearlibros(@Body() libroDto: crearLibroDto): Promise<any>{
        // return `Creado el libro, ${libroDto.titulo}`;
        return this.LibrosService.crearlibro(libroDto);
    }
    /*el "id" es un numero q se le agrega a la url detras de libros. 
    Ejemplo, http://localhost:3000/libros/25*/

    @Put(':id')
    Modificarlibros(@Param('id') idLibro:number, @Body() libroDto: crearLibroDto): Promise<any>{
        return this.LibrosService.modificarlibro(idLibro, libroDto);
        // return `modificado el libros ${idLibro}`;
    }
    @Delete(':id')
    Borrarlibros(@Param('id') idLibro:number): Promise<any>{
        // return `borrado el libros ${idLibro}`;
        return this.LibrosService.deletelibro(idLibro);
    }


}

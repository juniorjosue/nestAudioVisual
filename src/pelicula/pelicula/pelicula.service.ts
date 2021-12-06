import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';


@Injectable()
export class PeliculaService {

  constructor(
    @InjectRepository(Pelicula)
    private peliculaRepository: Repository<Pelicula>
) 
{ }

async create(createPeliculaDto: CreatePeliculaDto):Promise<Pelicula> {
    return await this.peliculaRepository.save(createPeliculaDto);
  }

  async findAll():Promise<Pelicula[]> {
    return await this.peliculaRepository.find();
  }

  async findOne(id: number):Promise<Pelicula> {
    return await this.peliculaRepository.findOne(id);
  }

  async update(id: number, updatePeliculaDto: CreatePeliculaDto):Promise<UpdateResult> {
    return await this.peliculaRepository.update(id, updatePeliculaDto);
  }

  async remove(id: number):Promise<DeleteResult> {
    return await this.peliculaRepository.delete(id);
  }
}

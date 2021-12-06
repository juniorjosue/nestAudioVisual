import { Module } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { PeliculaController } from './pelicula.controller';
import { Pelicula } from './entities/pelicula.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pelicula])],
  controllers: [PeliculaController],
  providers: [PeliculaService]
})
export class PeliculaModule {}

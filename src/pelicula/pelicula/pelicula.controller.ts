import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

@Controller('pelicula')
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService) {}

  @Post()
  create(@Body() createPeliculaDto: CreatePeliculaDto) {
    return this.peliculaService.create(createPeliculaDto);
  }

  @Get()
  findAll() {
    return this.peliculaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peliculaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeliculaDto: UpdatePeliculaDto) {
    return this.peliculaService.update(+id, updatePeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peliculaService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Libro } from './libros/entities/libro.entity';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';
import { PeliculaModule } from './pelicula/pelicula/pelicula.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'nestngdb',
      username: 'juniornest',
      password: '123',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging:false
    }),
    TypeOrmModule.forFeature([Libro]),
    PeliculaModule
  ],
  controllers: [AppController, LibrosController],
  providers: [AppService, LibrosService],
})
export class AppModule {}

import { ApiProperty } from "@nestjs/swagger";



export class CreatePeliculaDto {

    @ApiProperty()
    readonly id: number;
    @ApiProperty()
    readonly titulo: string;
    @ApiProperty()
    readonly genero_id: number;
    @ApiProperty()
    readonly user_id: number;
    @ApiProperty()
    readonly valoracion_id: number;
    @ApiProperty()
    readonly sinopsis: string;
    @ApiProperty()
    readonly imagen: string;
    @ApiProperty()
    readonly fecha_visto: string;
    @ApiProperty()
    readonly created_at: string;
    @ApiProperty()
    readonly updated_at: string;
   
  
}

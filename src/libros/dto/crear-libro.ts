import { ApiProperty } from "@nestjs/swagger";

export class crearLibroDto{
    @ApiProperty()
    readonly id: number;
    @ApiProperty()
    readonly titulo: string;
    @ApiProperty()
    readonly autor: string;
    @ApiProperty()
    readonly descripcion: string;
}
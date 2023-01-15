export class Estudio {
    id?: number;
    institucion: string;
    direccion: string;
    titulo: string;
    fecha_inicio: string;
    fecha_fin: string;
    idpersona: number;

    constructor(institucion: string, direccion: string, titulo: string, fecha_inicio: string, fecha_fin: string, idpersona: number) {
        this.institucion = institucion;
        this.direccion = direccion;
        this.titulo = titulo;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.idpersona = idpersona;
    }
}
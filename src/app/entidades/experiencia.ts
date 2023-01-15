export class Experiencia {
    id?: number;
    institucion: string;
    direccion: string;
    posicion: string;
    fecha_inicio: string;
    fecha_fin: string;
    idpersona: number;

    constructor(institucion: string, direccion: string, posicion: string, fecha_inicio: string, fecha_fin: string, idpersona: number) {
        this.institucion = institucion;
        this.direccion = direccion;
        this.posicion = posicion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.idpersona = idpersona;
    }
}

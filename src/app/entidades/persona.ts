export class Persona {
    id?: number;
    nombre: string;
    titulo: string;
    imagenPerfil: string;
    descripcion: string;

    constructor(nombre: string, titulo: string, imagenPerfil: string, descripcion: string) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.imagenPerfil = imagenPerfil;
        this.descripcion = descripcion;
    }
}

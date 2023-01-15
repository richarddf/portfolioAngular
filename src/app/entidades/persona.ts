export class Persona {
    id?: number;
    nombre: string;
    titulo: string;
    imagen_perfil: string;
    descripcion: string;
    email: string;
    password: string;

    constructor(nombre: string, titulo: string, imagen_perfil: string, descripcion: string, email: string, password: string) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.imagen_perfil = imagen_perfil;
        this.descripcion = descripcion;
        this.email = email;
        this.password = password;
    }
}

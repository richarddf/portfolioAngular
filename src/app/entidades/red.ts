export class Red {
    id?:number;
    icono: string;
    nombre: string;
    url: string;
    idpersona: number;

    constructor(icono: string, nombre: string, url: string, idpersona: number) {
        this.icono = icono;
        this.nombre = nombre;
        this.url = url;
        this.idpersona = idpersona;
    }
}

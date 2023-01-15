export class Habilidad {
    id?: number;
    tecnologia: string;
    url_img_tecnologia: string;
    porcentaje: number;
    descripcion: string;
    idpersona: number;

    constructor(tecnologia: string, url_img_tecnologia: string, porcentaje: number, descripcion: string, idpersona: number) {
        this.tecnologia = tecnologia;
        this.url_img_tecnologia = url_img_tecnologia;
        this.porcentaje = porcentaje;
        this.descripcion = descripcion;
        this.idpersona = idpersona;
    }

}

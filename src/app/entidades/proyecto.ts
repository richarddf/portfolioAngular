export class Proyecto {
    id?: number;
    descripcion: string;
    url_img_proyecto: string;
    idpersona: number;

    constructor(descripcion: string, url_img_proyecto: string, idpersona: number) {
        this.descripcion = descripcion;
        this.url_img_proyecto = url_img_proyecto;
        this.idpersona = idpersona;
    }

}

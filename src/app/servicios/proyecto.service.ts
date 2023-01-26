import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = "http://localhost:8080/proyecto/"

  proyMod: Proyecto = {
    id: null ?? 0,
    descripcion: '',
    url_img_proyecto: '',
    idpersona : 1
  }

  constructor(private httpClient: HttpClient) { }

  public getProyectos(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + `lista`);
  }

  public verProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  public agregarProyecto(proy: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + `crear`, proy);
  }

  public actualizarProyecto(proy: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar`, proy);
  }

  public borrarProyecto(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

}

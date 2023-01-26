import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entidades/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url = "http://localhost:8080/habilidad/"

  habilMod: Habilidad = {
    id: null ?? 0,
    tecnologia: '',
    url_img_tecnologia: '',
    porcentaje: 0,
    descripcion: '',
    idpersona: 1   
  }

  constructor(private httpClient: HttpClient) { }

  public getHabilidades(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + `lista`);
  }

  public verHabilidad(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.url + `ver/${id}`);
  }

  public agregarHabilidad(habi: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.url + `crear`, habi);
  }

  public actualizarHabilidad(habi: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar`, habi);
  }

  public borrarHabilidad(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

}
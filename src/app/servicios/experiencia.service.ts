import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //url = "http://localhost:8080/experiencia/"
  url : string = environment.apiURL + "/experiencia/"

  experMod: Experiencia = {
    id: null ?? 0,
    institucion: '',
    direccion: '',
    posicion: '',
    fecha_inicio: '',
    fecha_fin: '',
    idpersona: 1    
  }

  constructor(private httpClient: HttpClient) { }

  public getExperiencias(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + `lista`);
  }

  public verExperiencia(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  }

  public agregarExperiencia(exper: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.url + `crear`, exper);
  }

  public actualizarExperiencia(exper: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar`, exper);
  }

  public borrarExperiencia(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

}

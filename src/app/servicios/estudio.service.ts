import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Estudio } from '../entidades/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  //url = "http://localhost:8080/estudio/"
  url : string = environment.apiURL + "/estudio/";

  estuMod: Estudio = {
    id: null ?? 0,
    institucion: '',
    direccion: '',
    titulo: '',
    fecha_inicio: '',
    fecha_fin: '',
    idpersona: 1    
  }

  constructor(private httpClient: HttpClient) {  }

  public getEstudios(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.url + `lista`);
  }

  public verEstudio(id: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.url + `ver/${id}`);
  }

  public agregarEstudio(estu: Estudio): Observable<any> {
    return this.httpClient.post<any>(this.url + `crear`, estu);
  }

  public actualizarEstudio(estu: Estudio): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar`, estu);
  }

  public borrarEstudio(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

}

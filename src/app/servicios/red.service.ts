import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../entidades/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {

  url = "http://localhost:8080/red/"

  constructor(private httpClient: HttpClient) { }

  public getRedes(): Observable<Red[]>{
    return this.httpClient.get<Red[]>(this.url + `lista`);
  }

  public verRed(id: number): Observable<Red> {
    return this.httpClient.get<Red>(this.url + `ver/${id}`);
  }

  public agregarRed(red: Red): Observable<any> {
    return this.httpClient.post<any>(this.url + `crear`, red);
  }

  public actualizarRed(red: Red): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar`, red);
  }

  public borrarRed(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  
}

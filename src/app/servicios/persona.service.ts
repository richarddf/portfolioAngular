import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = "http://localhost:8080/persona/"

  constructor(private httpClient: HttpClient) { }

  public getPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + `lista`);
  }

  public verPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  public agregarPersona(perso: Persona): Observable<any> {
    return this.httpClient.post<any>(this.url + `crear`, perso);
  }

  public actualizarPersona(perso: Persona): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar`, perso);
  }

  public borrarPersona(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}

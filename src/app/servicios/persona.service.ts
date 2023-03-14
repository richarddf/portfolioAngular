import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //url = "http://localhost:8080/persona/";
  url : string = environment.apiURL + "/persona/";

  persoMod: Persona = {
    id: 0,
    nombre: '',
    titulo: '',
    imagen_perfil: '',
    descripcion: '',
    email: '',
    password: '',
  }

  constructor(private httpClient: HttpClient) { }

  public getPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + `lista`);
  }

  public verPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  public actualizarPersona(perso: Persona): Observable<any> {
    return this.httpClient.put<any>(this.url + `actualizar`, perso);
  }

}

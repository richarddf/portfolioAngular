import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  //url = "http://localhost:8080/persona/autenticacion/login";
  url : string = environment.apiURL + "/persona/autenticacion/login";
  
  currentUserSubject : BehaviorSubject<any>;
  //sessionStorage : any;

  constructor(private http : HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}')); 
  }

  loginPersona(credenciales : any) : Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));

  }

  get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }

}

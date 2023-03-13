import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private autenticacionServicio : AutenticacionService) {}

  //intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.autenticacionServicio.usuarioAutenticado;

    if (currentUser && currentUser.id){
      request.clone({
        setHeaders: { 
          Autorization: `Bearer ${currentUser.id}}` // me devuelve los datos de la persona
        }
      })
    }

    //console.log("Interceptor esta corriendo " + JSON.stringify(currentUser));
    return next.handle(request);
  }
}

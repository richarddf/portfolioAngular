import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entidades/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  form: FormGroup;

  perso: Persona = new Persona("","","","","","");

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private ruta: Router, private autoService: AutenticacionService) {
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      password : ['',[Validators.required, Validators.minLength(8)]],
      email : ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', "");
  }

  get Password(){
    return this.form.get("password");
  }

  get Mail(){
    return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    //event.preventDefault; 

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      //alert("Todo salio bien ¡Enviar formulario!");
      event.preventDefault; 

      this.autoService.loginPersona(this.form.value).subscribe(data => {
        if (data === null || data === undefined)
          {
            alert("Credenciales no validas");
          }else{
            console.log("User: " + JSON.stringify(data));
            console.log(data);
            this.ruta.navigate(['']); 
            window.location.reload();
          }
        
      },            
      error => {
          alert("hay liooooo " + error);
      });
      
      //window.location.reload();

    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
      sessionStorage.setItem('currentUser', "null");
      sessionStorage.setItem('idUser', "0");
      //alert("Credenciales no validas");
    }

  }

  reset() {
    //console.log("Se limpió el formulario");
    this.form.reset();
  }

}

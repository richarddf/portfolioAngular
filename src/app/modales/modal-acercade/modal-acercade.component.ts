import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-acercade',
  templateUrl: './modal-acercade.component.html',
  styleUrls: ['./modal-acercade.component.css']
})
export class ModalAcercadeComponent implements OnInit {

  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      nombreYApellido : ['',[Validators.required]],
      titulo : ['',[Validators.required]],
      urlImgPerfil : ['',[Validators.required]],
      descripcion : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get NombreYApellido(){
    return this.form.get("nombreYApellido");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get UrlImgPerfil(){
    return this.form.get("urlImgPerfil");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get NombreYApellidoValid(){
    return this.NombreYApellido?.touched && !this.NombreYApellido?.valid;
  }

  get TituloValid() {
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get UrlImgPerfilValid(){
    return this.UrlImgPerfil?.touched && !this.UrlImgPerfil?.valid;
  }

  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
}

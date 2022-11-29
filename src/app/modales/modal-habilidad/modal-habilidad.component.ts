import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-habilidad',
  templateUrl: './modal-habilidad.component.html',
  styleUrls: ['./modal-habilidad.component.css']
})
export class ModalHabilidadComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      tecnologia : ['',[Validators.required]],
      urlImgTec : ['',[Validators.required]],
      porcentaje : ['',[Validators.required]],
      descripcion : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get Tecnologia(){
    return this.form.get("tecnologia");
  }

  get UrlImgTecnologia(){
    return this.form.get("urlImgTec");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get TecnologiaValid(){
    return this.Tecnologia?.touched && !this.Tecnologia?.valid;
  }

  get UrlImgTecnologiaValid(){
    return this.UrlImgTecnologia?.touched && !this.UrlImgTecnologia?.valid;
  }

  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
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
      alert("Todo salio bien ¡Enviar formulario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-proyecto-add',
  templateUrl: './modal-proyecto-add.component.html',
  styleUrls: ['./modal-proyecto-add.component.css']
})
export class ModalProyectoAddComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      urlImgProyecto : ['',[Validators.required]],
      descripcion : ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get UrlImgProyecto(){
    return this.form.get("urlImgProyecto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get UrlImgProyectoValid(){
    return this.UrlImgProyecto?.touched && !this.UrlImgProyecto?.valid;
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

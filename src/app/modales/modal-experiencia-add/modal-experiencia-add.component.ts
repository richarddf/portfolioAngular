import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-experiencia-add',
  templateUrl: './modal-experiencia-add.component.html',
  styleUrls: ['./modal-experiencia-add.component.css']
})
export class ModalExperienciaAddComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      institucion : ['',[Validators.required]],
      direccion : ['',[Validators.required]],
      posicion : ['',[Validators.required]],
      fechaInicio : ['',[Validators.required]],
      fechaFin : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get Institucion(){
    return this.form.get("institucion");
  }

  get Direccion(){
    return this.form.get("direccion");
  }

  get Posicion(){
    return this.form.get("posicion");
  }

  get FechaInicio(){
    return this.form.get("fechaInicio");
  }

  get FechaFin(){
    return this.form.get("fechaFin");
  }

  get InstitucionValid(){
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get PosicionValid(){
    return this.Posicion?.touched && !this.Posicion?.valid;
  }

  get FechaInicioValid(){
    return this.FechaInicio?.touched && !this.FechaInicio?.valid;
  }

  get FechaFinValid(){
    return this.FechaFin?.touched && !this.FechaFin?.valid;
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

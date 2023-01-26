import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public educaService: EstudioService) { 
    // Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      institucion : ['',[Validators.required]],
      direccion : ['',[Validators.required]],
      titulo : ['',[Validators.required]],
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

  get Titulo(){
    return this.form.get("titulo");
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

  get TituloValid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
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
      try {
        this.educaService.actualizarEstudio(this.educaService.estuMod).subscribe(data => {
          this.educaService.estuMod = data;
          console.log(data);
        });
        alert("Datos modificados exitosamente");
        window.location.reload();
      } catch (error) {
          alert(error);
      }

    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }

  }  

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-modal-educacion-add',
  templateUrl: './modal-educacion-add.component.html',
  styleUrls: ['./modal-educacion-add.component.css']
})
export class ModalEducacionAddComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public educaService: EstudioService) { 
    // Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      institucion : ['',[Validators.required]],
      direccion : ['',[Validators.required]],
      titulo : ['',[Validators.required]],
      fecha_inicio : ['',[Validators.required]],
      fecha_fin : ['',[Validators.required]]
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
    return this.form.get("fecha_inicio");
  }

  get FechaFin(){
    return this.form.get("fecha_fin");
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

    if (this.form.valid){
      // Detenemos la propagación o ejecución del compotamiento submit de un form
      event.preventDefault;
      try {
        // Llamamos a nuestro servicio para enviar los datos al servidor
        // También podríamos ejecutar alguna lógica extra
        this.educaService.agregarEstudio(this.form.value).subscribe(data => {
          this.educaService.estuMod = data;
          console.log(data);
        });
        alert("Datos agregados exitosamente");
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

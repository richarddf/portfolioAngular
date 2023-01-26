import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidad-add',
  templateUrl: './modal-habilidad-add.component.html',
  styleUrls: ['./modal-habilidad-add.component.css']
})
export class ModalHabilidadAddComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public habilService: HabilidadService) { 
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      tecnologia : ['',[Validators.required]],
      url_img_tecnologia : ['',[Validators.required]],
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
    return this.form.get("url_img_tecnologia");
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
      try {
        this.habilService.agregarHabilidad(this.form.value).subscribe(data => {
          this.habilService.habilMod = data;
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

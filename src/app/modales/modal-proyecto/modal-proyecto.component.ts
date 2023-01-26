import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public proyService: ProyectoService) {
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      url_img_proyecto : ['',[Validators.required]],
      descripcion : ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get UrlImgProyecto(){
    return this.form.get("url_img_proyecto");
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
      try {
        this.proyService.actualizarProyecto(this.proyService.proyMod).subscribe(data => {
          this.proyService.proyMod = data;
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

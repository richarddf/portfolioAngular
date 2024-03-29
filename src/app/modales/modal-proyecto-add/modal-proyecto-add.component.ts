import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyecto-add',
  templateUrl: './modal-proyecto-add.component.html',
  styleUrls: ['./modal-proyecto-add.component.css']
})
export class ModalProyectoAddComponent implements OnInit {

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

    if (this.form.valid){
      
      // Detenemos la propagación o ejecución del compotamiento submit de un form
      event.preventDefault;
      try {
        // Llamamos a nuestro servicio para enviar los datos al servidor
        // También podríamos ejecutar alguna lógica extra
        this.proyService.agregarProyecto(this.form.value).subscribe(data => {
          this.proyService.proyMod = data;
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

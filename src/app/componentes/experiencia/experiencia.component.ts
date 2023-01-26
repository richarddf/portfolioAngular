import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  // Traer un array

  experiencias : Experiencia[] = [];
  modoEdicion: boolean = false;  

  constructor(private datos:ExperienciaService) { }

  ngOnInit(): void {
    this.datos.getExperiencias().subscribe(data => {
      //console.log(data);
      this.experiencias = data;
    });

    if (sessionStorage.getItem('currentUser') !== null && sessionStorage.getItem('currentUser') !== "null") {
      this.modoEdicion = true;        
    }

  }

  traerExperiencia(id:number){
    this.datos.verExperiencia(id).subscribe(data => {
      this.datos.experMod = data;
    });
  }

  borrarExperiencia(id:number){
    this.datos.borrarExperiencia(id).subscribe(data => {
      this.datos.experMod = data;
    });
    alert("Experiencia eliminada");
    window.location.reload();
  }

}

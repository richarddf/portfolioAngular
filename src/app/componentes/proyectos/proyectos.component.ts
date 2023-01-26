import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
// Traer un array
  proyectos : Proyecto[] = [];
  modoEdicion: boolean = false;

  constructor(private datos:ProyectoService) { }

  ngOnInit(): void {
    this.datos.getProyectos().subscribe(data => {
      this.proyectos = data;
    });
    if (sessionStorage.getItem('currentUser') !== null && sessionStorage.getItem('currentUser') !== "null") {
      this.modoEdicion = true;        
    }
  }

  traerProyecto(id:number){
    this.datos.verProyecto(id).subscribe(data => {
      this.datos.proyMod = data;
    });
  }

  borrarProyecto(id:number){
    this.datos.borrarProyecto(id).subscribe(data => {
      this.datos.proyMod = data;
    });
    alert("Proyecto eliminado");
    window.location.reload();
  }

}

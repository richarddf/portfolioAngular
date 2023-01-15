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

  constructor(private datos:ProyectoService) { }

  ngOnInit(): void {
    this.datos.getProyectos().subscribe(data => {
      this.proyectos = data;
    })
  }

}

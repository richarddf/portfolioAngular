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

  constructor(private datos:ExperienciaService) { }

  ngOnInit(): void {
    this.datos.getExperiencias().subscribe(data => {
      console.log(data);
      this.experiencias = data;
    })
  }

}

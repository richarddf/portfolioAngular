import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/entidades/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  // Traer un array
  
  estudios : Estudio[]=[];

  constructor(private datos:EstudioService) { }

  ngOnInit(): void {
    this.datos.getEstudios().subscribe(data => {
      this.estudios = data;
    })
  }
}

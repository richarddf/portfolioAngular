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
  modoEdicion: boolean = false;  

  constructor(private datos:EstudioService) { }

  ngOnInit(): void {
    this.datos.getEstudios().subscribe(data => {
      this.estudios = data;
    });

    if (sessionStorage.getItem('currentUser') !== null && sessionStorage.getItem('currentUser') !== "null") {
      this.modoEdicion = true;        
    }
  }

  traerEstudio(id:number){
    this.datos.verEstudio(id).subscribe(data => {
      this.datos.estuMod = data;
    });
  }

  borrarEstudio(id:number){
    this.datos.borrarEstudio(id).subscribe(data => {
      this.datos.estuMod = data;
    });
    alert("Estudio eliminado");
    window.location.reload();
  }

}

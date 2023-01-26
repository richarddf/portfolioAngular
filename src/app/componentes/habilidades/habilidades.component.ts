import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entidades/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
 // Traer un array

  habilidades : Habilidad[] = [];
  modoEdicion: boolean = false;  

  alternativo : string = 'Logo ';

  constructor(private datos:HabilidadService) { }

  ngOnInit(): void {
    this.datos.getHabilidades().subscribe(data => {
      this.habilidades = data;
    });
    if (sessionStorage.getItem('currentUser') !== null && sessionStorage.getItem('currentUser') !== "null") {
      this.modoEdicion = true;        
    }
  }

  traerHabilidad(id:number){
    this.datos.verHabilidad(id).subscribe(data => {
      this.datos.habilMod = data;
    });
  }

  borrarHabilidad(id:number){
    this.datos.borrarHabilidad(id).subscribe(data => {
      this.datos.habilMod = data;
    });
    alert("Habilidad eliminada");
    window.location.reload();
  }
}

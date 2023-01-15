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

  alternativo : string = 'Logo ';

  constructor(private datos:HabilidadService) { }

  ngOnInit(): void {
    this.datos.getHabilidades().subscribe(data => {
      this.habilidades = data;
    })
  }

}

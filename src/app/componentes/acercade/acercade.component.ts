import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  nombre : string = '';
  titulo : string = '';
  imgPerfil : string = '';
  descripcion : string = '';
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.titulo = data.titulo;
      this.imgPerfil = data.imagenPerfil;
      this.descripcion = data.descripcion;
    })
  }

}

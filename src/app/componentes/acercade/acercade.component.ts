import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
// import { PersonaService } from 'src/app/servicios/persona.service';
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

  // personas: Persona[]=[];
  
  constructor(private datos:DatosService) { }
  // constructor(private persoService : PersonaService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.titulo = data.titulo;
      this.imgPerfil = data.imagenPerfil;
      this.descripcion = data.descripcion;
    })
    // this.listaExperiencias();
  }

  // listaExperiencias() : void{
  //   this.persoService.getPersonas().subscribe(data => {this.personas=data});
  // }

}

import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  personas: Persona[]=[];
  modoEdicion: boolean = false;
  
  constructor(private datos:PersonaService) { }

  ngOnInit(): void {
    
    this.datos.getPersonas().subscribe(data => {
      console.log(data);
      this.personas = data;
    });

    // console.log("paso 1");
    // console.log(sessionStorage.getItem('currentUser'));
    if (sessionStorage.getItem('currentUser') !== null && sessionStorage.getItem('currentUser') !== "null") {
      this.modoEdicion = true;        
    } 

    // console.log("paso 2");
    // console.log(sessionStorage.getItem('currentUser'));
    // console.log(this.modoEdicion);

  }

  //Este método sirve para obtener el id de la persona al hacer click en el ícono del lápiz y así, mandar todos los datos al modal de edición
  traerPersona(id:number){
    this.datos.verPersona(id).subscribe(data => {
      this.datos.persoMod = data;
    });
  }

}

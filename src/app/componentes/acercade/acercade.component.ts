import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
// import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  //personas: Persona[]=[];
  persona: Persona = new Persona("","","","","","");
  
  constructor(private datos:PersonaService) { }
  // constructor(private persoService : PersonaService) { }

  ngOnInit(): void {
    // this.datos.getPersonas().subscribe(data => {
    //   console.log(data);
    //   this.personas = data;
    // })

    this.datos.verPersona(1).subscribe(data => {
      console.log(data);
      this.persona = data;
    });
  }

}

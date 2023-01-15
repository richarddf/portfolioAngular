import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/entidades/red';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  // Traer un array

  redes : Red[]=[];

  constructor(private datos:RedService) { }

  ngOnInit(): void {
    this.datos.getRedes().subscribe(data => {
      this.redes = data;
    })
  }

}

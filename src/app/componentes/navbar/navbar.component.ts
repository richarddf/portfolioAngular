import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  modoEdicion: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser') !== null && sessionStorage.getItem('currentUser') !== "null") {
      this.modoEdicion = true;        
     } 
  }

  CerrarSesion(){
    sessionStorage.setItem('currentUser', 'null');
    this.modoEdicion = false; 
    window.location.reload();
  }
}

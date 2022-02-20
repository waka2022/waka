import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-parqueadero',
  templateUrl: './info-parqueadero.page.html',
  styleUrls: ['./info-parqueadero.page.scss'],
})
export class InfoParqueaderoPage implements OnInit {

  estado:boolean = false

  constructor() { }

  ngOnInit() {
  }

  cambiarEstado(){
    this.estado = !this.estado;
  }
  
}

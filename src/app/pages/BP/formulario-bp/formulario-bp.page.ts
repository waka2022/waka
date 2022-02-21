import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-bp',
  templateUrl: './formulario-bp.page.html',
  styleUrls: ['./formulario-bp.page.scss'],
})
export class FormularioBPPage implements OnInit {

  constructor( private router :Router) { }

  ngOnInit() {
  }

  registrar(){
    this.router.navigate(['tabs/mapa'])
  }

}

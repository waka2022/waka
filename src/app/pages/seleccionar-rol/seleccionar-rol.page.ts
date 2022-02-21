import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-rol',
  templateUrl: './seleccionar-rol.page.html',
  styleUrls: ['./seleccionar-rol.page.scss'],
})
export class SeleccionarRolPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  siguiente(){
    this.router.navigate(['formulario-bp'])
  }

}

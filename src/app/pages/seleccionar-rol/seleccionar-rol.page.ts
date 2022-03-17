import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-rol',
  templateUrl: './seleccionar-rol.page.html',
  styleUrls: ['./seleccionar-rol.page.scss'],
})
export class SeleccionarRolPage implements OnInit {

  constructor(private router:Router) { }

  userRol: any = new FormGroup({
    rol: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  siguiente(){

    if (this.userRol.value.rol === "USER_BP") {

      this.router.navigate(['formulario-bp'])
      
    } else if (this.userRol.value.rol === "USER_PP"){

      this.router.navigate(['registro-parqueadero'])

    } else {

      this.router.navigate(['error404'])

    }

  }


}

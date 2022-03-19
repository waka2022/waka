//?importando los compoenenets de angular,alojado en angular /core
import { Component, OnInit } from '@angular/core';

//?importando formularios reactivos alojados en angular/forms
import { FormControl, FormGroup, Validators } from '@angular/forms';

//!componentes los cuales conectac y refieren a los distintos archivos de acceso
@Component({
  selector: 'app-acceso-estadisticas',
  templateUrl: './acceso-estadisticas.page.html',
  styleUrls: ['./acceso-estadisticas.page.scss'],
})

//**exportando la clase acceso y implementando OnInit para el ciclo de vida del mismo */
export class AccesoEstadisticasPage implements OnInit {

    //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
  constructor() { }

 //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {
  }

  //generando el formulario mediante formulario reactivo
  user_due = new FormGroup({
    // campos que estamos pidiendo al usuario en el formulario (html)aca mediante required indicamos que los campos son obligatorios y validando el tipo de dato.  
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  
  });

}

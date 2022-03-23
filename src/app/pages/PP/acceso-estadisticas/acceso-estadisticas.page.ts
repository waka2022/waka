// Proyecto de formación SENA (WAKA)
//    Descripción: codigo TypeScript de la pagina estadisticas = visulaizar estadisitcas de un parqueadero, solo rol (BP).
//    ?Autor:@SamuelCanoRomero
//    Fecha de creación:/02/2022
//   Ultima fecha de modificación:17/03/2022

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
    
    email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]),
    password: new FormControl('', Validators.required)
  
  });

}

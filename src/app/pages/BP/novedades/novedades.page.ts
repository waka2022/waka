/**
Proyecto de formación SENA (WAKA)
  Descripción: codigo TypeSript del Componente calificar = seleccionar una calificación, esté se mostrara despues de terminar la estadia en el parqueadero (lo visualiza el rol BP).
  Autor:@SamuelCanoRomero
  Fecha de creación:/02/2022
  Ultima fecha de modificación:17/03/2022
*/
//?importar la libreria de angular para componentes y la iniciación del mismo.
import { Component, OnInit } from '@angular/core';

//!contiene informació importante del componente(novedad).
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})

//**exporta la class novedadcomponent e implementa el oninit (iniciar este mismo) por el ciclo de vida que estos debe tener.
export class NovedadesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

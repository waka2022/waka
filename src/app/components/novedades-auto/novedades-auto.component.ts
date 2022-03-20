/**
Proyecto de formación SENA (WAKA)
  Descripción: codigo TypeSript del Componente novedades =  seleccionar archivo fotograficos (para saber el estado del auto antes y despues), esté se mostrara antes y despues de terminar la estadia en el parqueadero.
  Autor:@SamuelCanoRomero
  Fecha de creación:/02/2022
  Ultima fecha de modificación:17/03/2022
*/
//?importar la libreria de angular para componentes y la iniciación del mismo.
import { Component, OnInit } from '@angular/core';

//?importar la libreria de angular para formulario y manejo de este mismo.
import { FormControl, FormGroup, Validators } from '@angular/forms';

//!contiene informació importante del componente(novedad).
@Component({
  selector: 'app-novedades-auto',
  templateUrl: './novedades-auto.component.html',
  styleUrls: ['./novedades-auto.component.scss'],
})

//**exporta la class novedadcomponent e implementa el oninit (iniciar este mismo) por el ciclo de vida que estos debe tener.
export class NovedadesAutoComponent implements OnInit {

  //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases 
  constructor() { }

    //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {}


  //generando el formulario mediante formulario reactivo
  new_auto = new FormGroup({
    
    // campos que estamos pidiendo al usuario en el formulario (html)aca mediante required podemos estar indicando que los campos son obligatorios
    img: new FormControl('', ),
    des: new FormControl('', )
  
  });

}

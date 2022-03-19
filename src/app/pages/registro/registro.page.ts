//?importanto los componenets de angular para su uso, alojado en angular/core
import { Component, OnInit } from '@angular/core';
//?importando componentes para implementar fomularios reactivos alojado en agular/forms
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
//?importando rutas para su uso alojado en angular/route
import { Router } from '@angular/router';

//!componentes los cuales conectac y refieren a los distintos archivos de registro
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

//**exportando la clase Regsitro y implementando OnInit para el ciclo de vida del mismo */
export class RegistroPage implements OnInit {

  //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
  //en este caso le estamos pasando como parametro la route anteriormente importada 
  constructor( private router:Router) { }

      //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {
  }
//generando el formulario mediante formulario reactivo
  users = new FormGroup({
    // campos que estamos pidiendo al usuario en el formulario (html)aca mediante required indicamos que los campos son obligatorios y validando el tipo de dato.
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  //la funcion para guardar los datos
  saveData(): void{
    console.log(this.users.value);
  }

  //lo envia a la vista seleccionar el rol 
  Registrarse(){
    this.router.navigate(['seleccionar-rol'])
  }

}

// Proyecto de formación SENA (WAKA)
// Descripción: codigo TypeSCRIPT  de la pagina CAMBIAR Psw = formulario la clave de la cuenta .
// ?Autor:SamuelCanoRomero
// Fecha de creación:/02/2022
// Ultima fecha de modificación:17/03/2022


//?importando componete de angular alojado en anuglar/core
import { Component, OnInit } from '@angular/core';

//?importando formualario reactivo de angualar alojado en angular/forms
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
//import { PasswordValidator } from '../../validators/password.validator';


//!componentes los cuales conectac y refieren a los distintos archivos de newpas
@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.page.html',
  styleUrls: ['./new-pass.page.scss'],
})

//**exportando la clase Regsitro y implementando OnInit para el ciclo de vida del mismo */
export class NewPassPage implements OnInit {

    //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
  constructor() {}

    //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {}

  //generando el formulario para realizar validadcion de tipo de dato o si es requerido 
  pass = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')]),
      confirm_password: new FormControl('', Validators.required)
  });

}


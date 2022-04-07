/** Proyecto de formación SENA (WAKA)
 Descripción: codigo SCSS de la pagina registro = formulario crear una nueva cuenta .
 Autor:@SamuelCanoRomero
 Fecha de creación:/02/2022
 Ultima fecha de modificación:17/03/2022*/

//?importanto los componenets de angular para su uso, alojado en angular/core
import { Component, OnInit } from '@angular/core';

//?importando componentes para implementar fomularios reactivos alojado en agular/forms
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

//?importando rutas para su uso alojado en angular/route
import { Router } from '@angular/router';

//?importando la modalcontrolle de ionic alojado en ionic/angular
import { ModalController } from '@ionic/angular';

//?importando la API o servicio usuario alojado en servise/usuario.service
import { UsuarioService } from '../../services/usuario.service';

//!componentes los cuales conectac y refieren a los distintos archivos de registro
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

//**exportando la clase Regsitro y implementando OnInit para el ciclo de vida del mismo */
export class RegistroPage implements OnInit {



  //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
  //en este caso le estamos pasando como parametro la route anteriormente importada y el servicio
  constructor(private router: Router, private usuarioService: UsuarioService ) { }

  //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {
  }
//generando el formulario mediante formulario reactivo
  users = new FormGroup({
    // campos que estamos pidiendo al usuario en el formulario (html)aca mediante required indicamos que los campos son obligatorios y validando el tipo de dato.
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$'), Validators.minLength(4)]),
    tercond: new FormControl('false',Validators.requiredTrue)
  });



  //lo envia a la vista seleccionar el rol 
  Registrarse(){
    this.router.navigate(['seleccionar-rol'])
  }
  
  //la funcion para guardar los datos
  saveData(): void {
    //indicar el value con el ""campo"" en la coleccion
    const user = {
      name: this.users.value.name,
      email:this.users.value.email,
      password: this.users.value.password
    }
  //servicio crear nuevo usuario
    this.usuarioService.crearUsuario(user).subscribe( res => {console.log(res)})

    //this.usuarioService.messverificacion(this.users.value.email).subscribe( res => {console.log(res)})
  //redireccionar a la vista acceso
    this.router.navigate(['acceso'])
  }

  


  

}

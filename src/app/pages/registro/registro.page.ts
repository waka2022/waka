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

//?google sign in
import { ViewChild, ElementRef } from '@angular/core'

//!componentes los cuales conectac y refieren a los distintos archivos de registro
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

//**exportando la clase Regsitro y implementando OnInit para el ciclo de vida del mismo */
export class RegistroPage implements OnInit {

  //variable para implementar en el setrvico de google
  auth2: any;
  show
  Name
  mssg

  email

  //! la funcion para generar el login con google
  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;


  //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
  //en este caso le estamos pasando como parametro la route anteriormente importada y el servicio
  constructor(private router: Router, private usuarioService: UsuarioService) { }

  //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {
    //llamndo la funcion para la key de google 
    this.googleInitialize();
  }
  //generando el formulario mediante formulario reactivo
  users = new FormGroup({
    // campos que estamos pidiendo al usuario en el formulario (html)aca mediante required indicamos que los campos son obligatorios y validando el tipo de dato.
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //pattern para validar un email con @...com
    email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]),
    //pattern para validar una contrasrña sgura con Mayuscuculas, minusculas ,números y caracteres
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$'), Validators.minLength(4)]),
    tercond: new FormControl('false', Validators.requiredTrue)
  });


  //*la funcion para crear nuevo usaruio
  saveData(): void {
    //iguardar el value del formulario par aenviar 
    const user = {
      name: this.users.value.name,
      email: this.users.value.email,
      password: this.users.value.password
    }
    //inidicando la variable global con el gmail ingresado. para luego enviar en el servicio
    this.email = this.users.value.email
    console.log(this.email)
    //servicio crear nuevo usuario y enviar los datos del formualrio
    this.usuarioService.crearUsuario(user).subscribe(res => { console.log(res) })
    //enviar correo de activacion  y redireccionar a la vista acceso
    this.verificar(this.email) 

  }

  //* funcion para enviar el mensaje al correo y verificar la cuenta nueva
  verificar(email) {
    
   email = {
      "email": email
  }
    //servico para enviar un mensaje de verificar la cuenta de un nuevo usuario
    this.usuarioService.messverificacion(email).subscribe(res => { console.log(res) })
    //con un timepo de esperar redireccionar al usuario a aceso para que ingrese
    setTimeout(() => {
     this.router.navigate(['acceso'])
    }, 2000);


  }

  //*funcionamiento para implmenetar google
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          //id cliente de la api de google para implementar el google sign in
          client_id: '42745535661-9g4aek25maoj5dta1dtfl4tt3ap91ttu.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });

        //llamando la funcion login para inciar el logoe de gooel de un nuevo usuario
        this.prepareLogin();
      });
    }
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  //*funcionamiento para ingresar con google un nuevo usuario
  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        //informacion del usuario registrado
        let profile = googleUser.getBasicProfile();
        //token de google del nuevo usuario el cualse debe enviar en el setrvicio
        var id_token = googleUser.getAuthResponse().id_token;
        //indicandpo algunas variavles para mostrarlar por consoloa
        console.log("ID Token: " + id_token);
        this.show = true;
        this.Name = profile.getName();
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        //inidicando la variable global con el gmail ingresado.
        this.email = profile.getEmail()
        //enviar mensaje de activacion de cuenta al correo y redirecciona a acceso
        this.verificar(this.email) 

        //guardando el token en una variable para luego enviar en el servicios. para luego enviar en el servicio
        let tokenGoogle = id_token
        console.log(tokenGoogle)
        // setvicio de google para enviar el tokken y realizar el registro
        this.usuarioService.messverificacion(tokenGoogle).subscribe(res => { console.log(res) })

        //mostrar los posible errores mediante una alerta
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }


}

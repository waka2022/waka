import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
//?google sign in
import { ViewChild, ElementRef } from '@angular/core'
import { TermCondiPage } from '../term-condi/term-condi.page';





@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //variable para implementar en el setrvico de google
  auth2: any;
  show
  Name



 //! la funcion para generar el login con google
 @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  constructor(public loadingController: LoadingController,private router: Router, private usuarioService: UsuarioService, public toastController: ToastController, private modalController: ModalController, ) { }

  ngOnInit() {
    //llamndo la funcion para la key de google 
    this.googleInitialize();
  }

  async Loading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  }

  async msgError(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 3500,
      cssClass: "rojo",
      mode: "ios",
      position: 'top'
    });
    toast.present();
  }

  async msgBien(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 5500,
      mode: "ios",
      color:"celeste",
      position: 'top'
    });
    toast.present();
  }

  obteenerinfo() {
    let token = localStorage.getItem("token")

    this.usuarioService.getInfo(token).subscribe(
      (res: any) => {


        if (res.data.document === undefined) {

          this.router.navigate(['seleccionar-rol'])

        } else {

          if (res.data.parking === true) {
            this.router.navigate(['tabs2/mis-parqueaderos'])
          } else {
            this.router.navigate(['tabs/mapa'])
          }
        }
      })
  }


  users = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')]),
    tercond: new FormControl('false',Validators.requiredTrue)
  });



  saveData(): void {

    const user = {
      name: this.users.value.name,
      email:this.users.value.email,
      password: this.users.value.password
    }

    this.usuarioService.crearUsuario(user).subscribe( (res:any) => {
      this.msgBien(res.msg)
      this.router.navigate(['acceso'])
    },error =>{
      this.msgError(error.error.msg)
    })
    
    
  }


  

    async openTerms() {
 //* modal para abrir crear un nuevo vehiculo

  const modal = await this.modalController.create({
    component: TermCondiPage,
    initialBreakpoint: 1,
    breakpoints: [0.0, 0.5, 1],
    showBackdrop: true,
    swipeToClose: true,
    keyboardClose: true

  });

  await modal.present();
}




 //!google sing in

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
        var token = googleUser.getAuthResponse().id_token;
        //indicandpo algunas variavles para mostrarlar por consoloa
        console.log("ID Token: " + token);
        this.show = true;
        this.Name = profile.getName();
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        this.Loading()

        let tokenGoogle = {
          
            "token_google": token
        } 

        this.usuarioService.signGoogle(tokenGoogle).subscribe(
    
          (res: any) => {
    
            this.msgBien(res.msg)
          
            localStorage.setItem("token", res.data)
            this.obteenerinfo()
    
          },error => {
            this.msgError(error.error.msg)
          })
      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  

}

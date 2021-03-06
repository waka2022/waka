//?importando compoenentes  de angular alojado en angular/core
import { Component, OnInit } from '@angular/core';

//?importando el servicio de usuario para eliminar el usuario alojado en  ./../../services/usuario.service
import { UsuarioService } from '../../../services/usuario.service';

//?importando controller de alert de ionic alojado en ionic/angular 
import { AlertController } from '@ionic/angular'

//?importando el servicio de emmiter para el token alojado en  ../../../services/emmiters.service
import { EmmitersService } from '../../../services/emmiters.service';

import { Router } from '@angular/router';



//!componentes los cuales conectac y refieren a los distintos archivos de registro

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any = {
    names: "",
    document: "",
    email_t: {
      email: ""
    }
  }
  mssg: string
  email
  img

  constructor(
    private router: Router,
    private usuService: UsuarioService,
    public alertController: AlertController,
    private emmiter: EmmitersService
  ) { }

  ngOnInit() {

    this.traerInfoUsuario()
    this.emmiter.$emmiterProfile.subscribe(
      resp => this.traerInfoUsuario()
    )
  }

  traerInfoUsuario() {

    let token = localStorage.getItem("token")

    this.usuService.getInfo(token).subscribe((res: any) => {
      this.usuario = res.data
      this.email = this.usuario.email_t.email;

      if (this.usuario.google == false) {
        document.getElementById("btn-cambiar").style.visibility  = "hidden";
        document.getElementById("btn-eliminar").style.visibility  = "hidden";
        document.getElementById("btn-cambiarimg").style.visibility  = "hidden";
      } else {
        document.getElementById("btn-cambiar").style.visibility  = "visible";
        document.getElementById("btn-eliminar").style.visibility  = "visible";
        document.getElementById("btn-cambiarimg").style.visibility  = "visible";
      }
     
      // dandole valor a la variable global img 
      if (this.usuario.img== null) {
        // si no tiene una imagen el usuario registrado muestre una por defecto
        this.img = "https://storage.googleapis.com/media.clinicavisualyauditiva.com/images/2019/11/211fd983-default-user-image.png"
      } else {
        // muestre la img que tiene el usuario guardada
        this.img =  this.usuario.img
      }
      console.log(res)
    })

  }

  //*generando la alerta para avisar al usuario de cambiar la contrse??a
  async presentAlertCambiarPass(email2) {
    const alert = await this.alertController.create({
      //nombre para dar estilos a la misma
      cssClass: 'my-custom-class',
      id: 'text',
      //tiutlo de la alerta
      header: 'Cambiar Contrase??a',
      //mensaje o centendio de la alerta donde le envio el correo al cual se enviara el mensaje
      message: this.email,

      //   inputs:[{name: 'emailUser',
      //   type: 'text',
      //   id: 'emailalert',
      //   value: this.email,
      //   placeholder: 'Email'
      // }
      //   ],
      //tendra dos botones (cancelar y confirmar)
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'btn1',
          handler: (emailalert) => {
            console.log('Cancel');
            console.log(emailalert);
          }
        },
        //!en el boton confirmar enviarar el cambio de estado de la cuenta y mostrar el mensaje de elimincaion en 16 d??as
        {
          text: 'Confirmar',
          cssClass: 'btn2',
          handler: (email) => {
            console.log('Confirm');


            //servico para enviar el mensaje de cambio de contrase??a
            this.usuService.solicitudEmail(this.email, 2).subscribe(
              (res: any) => {
                console.log(res)
                console.log(email)
                //guardando el mensaje para mostrarlo en la vista
                this.mssg = res.msg
              })
            //dandolo un timepo para que redirecciona al cambio de contrase??a
            setTimeout(() => {
              this.router.navigate(['app-new-pass'])
            }, 5000);

          }
        }
      ]
    });

    await alert.present();
  }

  //*generando la alerta para avisar al usuario de eliminar la cuenta
  async presentAlertDesHabilitar() {
    const alert = await this.alertController.create({
      //nombre para dar estilos a la misma
      cssClass: 'my-custom-class',
      //tiutlo de la alerta
      header: 'Eliminar la cuenta',
      //subtitulo de la alerta
      subHeader: 'La eliminaci??n de cuenta es definitiva Al eliminarla',
      //mensaje o centendio de la alerta
      message: 'tu cuenta de WAKA y toda la informaci??n tambien se eliminar??',
      //tendra dos botones (cancelar y confirmar)
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'btn1',
          handler: () => {
            console.log('Cancel');
          }
        },
        //!en el boton confirmar enviarar el cambio de estado de la cuenta y mostrar el mensaje de elimincaion en 16 d??as
        {
          text: 'Confirmar',
          cssClass: 'btn2',
          handler: () => {
            console.log('Confirm');

            //trer el token  y guardarlo en una variable
            let token = localStorage.getItem("token");

            //servicio para inHabilitar una cuenta enviando token
            this.usuService.inhabilitarUsuario(token).subscribe(
              (res: any) => {
                console.log(res)
                //mensaje para mostrarlo en la vista
                this.mssg = res.msg
              })
          }
        }
      ]
    });

    await alert.present();
  }

  cerrarSesion() {
    localStorage.clear()
    this.router.navigate(['inicio'])
  }

}

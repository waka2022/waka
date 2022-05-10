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
      this.img = this.usuario.img
      console.log(res)
    })

  }

  //*generando la alerta para avisar al usuario de cambiar la contrseña
  async presentAlertCambiarPass(email2) {
    const alert = await this.alertController.create({
      //nombre para dar estilos a la misma
      cssClass: 'my-custom-class',
      id: 'text',
      //tiutlo de la alerta
      header: 'Cambiar Contraseña',
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
        //!en el boton confirmar enviarar el cambio de estado de la cuenta y mostrar el mensaje de elimincaion en 16 días
        {
          text: 'Confirmar',
          cssClass: 'btn2',
          handler: (email) => {
            console.log('Confirm');


            //servico para enviar el mensaje de cambio de contraseña
            this.usuService.solicitudEmail(this.email, 2).subscribe(
              (res: any) => {
                console.log(res)
                console.log(email)
                //guardando el mensaje para mostrarlo en la vista
                this.mssg = res.msg
              })
            //dandolo un timepo para que redirecciona al cambio de contraseña
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
      subHeader: 'La eliminación de cuenta es definitiva Al eliminarla',
      //mensaje o centendio de la alerta
      message: 'tu cuenta de WAKA y toda la información tambien se eliminará',
      //tendra dos botones (cancelar y confirmar)
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'btn1',
          handler: () => {
            console.log('Cancel');
          }
        },
        //!en el boton confirmar enviarar el cambio de estado de la cuenta y mostrar el mensaje de elimincaion en 16 días
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
    localStorage.removeItem('token')
    this.router.navigate(['inicio'])
  }

}

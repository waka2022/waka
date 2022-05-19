import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-parqueadero',
  templateUrl: './perfil-parqueadero.page.html',
  styleUrls: ['./perfil-parqueadero.page.scss'],
})
export class PerfilParqueaderoPage implements OnInit {

  usuario:any = {
    phone:"",
    email_t:{
      email:""
    }
  }
  mssg :string
  email
  img

  constructor(private usuService : UsuarioService, 
              public alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.traerInfoUsuario()
  }

  async presentAlertDesHabilitar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar la cuenta',
      message: 'La eliminación de cuenta sera definitiva',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'btn1',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'Confirmar',
          cssClass: 'btn2',
          handler: () => {
            console.log('Confirm');{
            let token = localStorage.getItem("token");

            this.usuService.inhabilitarUsuario(token).subscribe(
              (res: any) => {
                console.log(res)
                this.mssg = res.msg
              })}
          }
        }
      ]
    });

    await alert.present();
  }
  traerInfoUsuario() {

    let token = localStorage.getItem("token")

    this.usuService.getInfo(token).subscribe((res: any) => {
      this.usuario = res.data
      this.email = this.usuario.email_t.email;
      console.log(res)
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
          this.usuService.solicitudEmail(this.email,2).subscribe(
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


  cerrarSesion(){
    localStorage.removeItem('token')
    this.router.navigate(['inicio'])
  }

}

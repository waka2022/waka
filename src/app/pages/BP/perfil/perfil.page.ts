//?importando compoenentes  de angular alojado en angular/core
import { Component, OnInit } from '@angular/core';

//?importando el servicio de usuario para eliminar el usuario alojado en  ./../../services/usuario.service
import { UsuarioService } from '../../../services/usuario.service';

//?importando controller de alert de ionic alojado en ionic/angular 
import { AlertController } from '@ionic/angular'

//?importando el servicio de emmiter para el token alojado en  ../../../services/emmiters.service
import { EmmitersService } from '../../../services/emmiters.service';


//!componentes los cuales conectac y refieren a los distintos archivos de registro
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {

  usuario = {}
  mssg :string

  constructor(
    private usuService : UsuarioService, 
    public alertController: AlertController,
    private emmiter: EmmitersService
    ) { }

  ngOnInit() {

    this.traerInfoUsuario()
    this.emmiter.$emmiterProfile.subscribe(
      resp => this.traerInfoUsuario()
    )
  }

  traerInfoUsuario(){

    let token = localStorage.getItem("token")

    this.usuService.getInfo( token ).subscribe((res:any) => {
      this.usuario = res.data
    
    })

  }

  //*generando la alerta para avisar al usuario de eliminar la cuenta
  async presentAlertMultipleButtons() {
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
            let token = localStorage.getItem("token");

            this.usuService.inhabilitarUsuario(token).subscribe(
              (res: any) => {
                console.log(res)
                this.mssg = res.msg
              })}
        }
      ]
    });

    await alert.present();
  }

}

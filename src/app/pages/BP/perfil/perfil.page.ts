import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { AlertController } from '@ionic/angular'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = {}

  constructor(private usuarioService:UsuarioService, private usuService : UsuarioService, public alertController: AlertController) { }

  ngOnInit() {

    this.traerInfoUsuario()
  }

  traerInfoUsuario(){

    let token = localStorage.getItem("token")

    this.usuService.getInfo( token ).subscribe((res:any) => {
      this.usuario = res.data
    
    })
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar la cuenta',
      subHeader: 'La eliminación de cuenta es definitiva Al eliminarla',
      message: 'tu cuenta de WAKA y toda la información tambien se eliminará',
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
            console.log('Confirm');
            let token = localStorage.getItem("token");

            this.usuService.inhabilitarUsuario(token).subscribe(
              (res: any) => {
                console.log(res)
              })}
        }
      ]
    });

    await alert.present();
  }

}

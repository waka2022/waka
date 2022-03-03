import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-perfil-parqueadero',
  templateUrl: './perfil-parqueadero.page.html',
  styleUrls: ['./perfil-parqueadero.page.scss'],
})
export class PerfilParqueaderoPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
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
          }
        }
      ]
    });

    await alert.present();
  }

}

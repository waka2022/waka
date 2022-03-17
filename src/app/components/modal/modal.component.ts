import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async modal() {
    const alert = await this.alertController.create({
      cssClass: 'custom-modal',
      header: '',
      message: '¿ Que metodo de pago vas a usar ?',
      buttons: [
        {
          cssClass: 'btn-modal',
          text: 'efectivo',
          id: 'confirm-button',
          handler: () => {
            console.log('efectivo');
          }
        }
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

}

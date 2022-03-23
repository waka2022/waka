import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-calificar',
  templateUrl: './modal-calificar.component.html',
  styleUrls: ['./modal-calificar.component.scss'],
})
export class ModalCalificarComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async calificar() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: '',
      message: '¿ Que tal te parecio el servicio ?',
      id:'' ,
      buttons: [
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(1);
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(2);
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(3);
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(4);
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(5);
          }
        }
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

}

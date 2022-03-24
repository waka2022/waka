import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { ModalController } from '@ionic/angular';
import { AgregarParqueaderoPage } from '../agregar-parqueadero/agregar-parqueadero.page';
import { EmmitersService } from '../../../services/emmiters.service';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-mis-parqueaderos',
  templateUrl: './mis-parqueaderos.page.html',
  styleUrls: ['./mis-parqueaderos.page.scss'],
})
export class MisParqueaderosPage implements OnInit {

  constructor(private userServices: UsuarioService, private modalController: ModalController, private emmiter: EmmitersService,
    public alertController: AlertController, private geolocation: Geolocation) { }

  parqueaderos = []

  ngOnInit() {

    this.getParqueadero()

    this.emmiter.$emmiterProfile.subscribe(
      resp => {
        this.getParqueadero()
      }

    )
  }

  getParqueadero() {

    let token = this.userServices.traerToken()

    this.userServices.getParking(token).subscribe((res: any) => {

      this.parqueaderos = res.data
      console.log(this.parqueaderos)

    })
  }

  borrarParqueadero(id) {

    let token = this.userServices.traerToken()

    this.userServices.borrarParking(token, id).subscribe((res: any) => {

      console.log(res);

    })

    setTimeout(() => {

      this.ngOnInit()

    }, 2000);

  }

  async presentModal() {

    const modal = await this.modalController.create({
      component: AgregarParqueaderoPage,
      initialBreakpoint: 1,
      breakpoints: [0.0, 0.5, 1],
      showBackdrop: true,

    });

    await modal.present();
  }

  async AlertConfirmUbicacion(parqueadero_id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualizar ubicacion',
      message: 'Estas a punto de actualizar la ubicacion de este parqueadero, asegurece de estar en su parqueadero para hacer este proceso',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {

            this.geolocation.getCurrentPosition().then((resp) => {


              let token = this.userServices.traerToken()

              let ubi = {
                ubi: {
                  
                  "lon": resp.coords.latitude,
                  "lat": resp.coords.longitude

                }

              }

              console.log(ubi);

              this.userServices.updateParkingUbicacion(token, parqueadero_id, ubi).subscribe(res => {
                console.log(res);
              })




            }).catch((error) => {
              console.log('Error getting location', error);
            });




          }
        }
      ]
    });

    await alert.present();
  }

}

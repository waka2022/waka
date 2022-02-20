import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormularioAgregarVehiculoPage } from '../formulario-agregar-vehiculo/formulario-agregar-vehiculo.page';

@Component({
  selector: 'app-info-vehiculo',
  templateUrl: './info-vehiculo.page.html',
  styleUrls: ['./info-vehiculo.page.scss'],
})
export class InfoVehiculoPage implements OnInit {

  constructor(private modalController: ModalController ) { }

  ngOnInit() {
  }

  async presentModa2() {

    const modal = await this.modalController.create({
      component: FormularioAgregarVehiculoPage,
      initialBreakpoint: 0.8,
      breakpoints: [0.0, 0.8, 1],
      showBackdrop: true,
      mode: 'ios'


    });

    await modal.present();
  }

}

import { Component, ElementRef, OnDestroy, OnInit, ViewChild, Renderer2, AfterViewInit, OnChanges, DoCheck } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { InfoVehiculoPage } from '../info-vehiculo/info-vehiculo.page';
import { MapboxService } from '../../../services/mapbox.service';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage implements OnInit {

  estado: boolean = false

  constructor(private routerOutlet: IonRouterOutlet, private modalController: ModalController,
    private servicioMapBox: MapboxService, private renderer: Renderer2,
    public alertController: AlertController, private geolocation: Geolocation) {
  }


  ver() {
    console.log("hola");
  }

  ngOnInit() {

    /*setTimeout(
      () => {
        let boton = document.querySelector("#verMas");
        // Agregar listener
        boton.addEventListener("click", this.ver);
      }, 3000
    );*/

  }

  ionViewWillEnter() {
    this.cargarMapa()
  }
  

  cambiarEstado() {
    this.estado = !this.estado;
  }

  cargarMapa() {
    this.servicioMapBox.cargarMapa()
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.ngOnInit()
      event.target.complete();
    }, 100);
  }


  async presentModal() {

    const modal = await this.modalController.create({
      component: InfoVehiculoPage,
      initialBreakpoint: 1,
      breakpoints: [0.0, 0.5, 1],
      showBackdrop: true,
      mode: 'ios'

    });

    await modal.present();
  }



}



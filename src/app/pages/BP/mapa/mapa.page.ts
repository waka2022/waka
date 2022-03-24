import { Component, ElementRef, OnDestroy, OnInit, ViewChild, Renderer2, AfterViewInit, OnChanges, DoCheck } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { InfoVehiculoPage } from '../info-vehiculo/info-vehiculo.page';
import { MapboxService } from '../../../services/mapbox.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  estado: boolean = false

  constructor(private routerOutlet: IonRouterOutlet, private modalController: ModalController,
    private servicioMapBox: MapboxService, private renderer: Renderer2,
    public alertController: AlertController) {
  }

  ver() {
    console.log("hola");
  }

  ngOnInit() {
    this.cargarMapa()

    setTimeout(
      () => {
        let boton = document.querySelector("#verMas");
        // Agregar listener
        boton.addEventListener("click", this.ver);
      }, 3000
    );
  }

  cambiarEstado() {
    this.estado = !this.estado;
  }

  cargarMapa() {

    this.servicioMapBox.cargarMapa()
      .then((data) => {
        console.log("nice", data)

      })
      .catch((data) => {
        console.log("F", data)
      })

  }

  doRefresh(event) {
    console.log('Begin async operation');


    setTimeout(() => {


      this.ngOnInit()

      event.target.complete();
    }, 2000);
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



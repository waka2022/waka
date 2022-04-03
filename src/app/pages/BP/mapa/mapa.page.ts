import { Component, ElementRef, OnDestroy, OnInit, ViewChild, Renderer2, AfterViewInit, OnChanges, DoCheck } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { InfoVehiculoPage } from '../info-vehiculo/info-vehiculo.page';
import { MapboxService } from '../../../services/mapbox.service';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage implements OnInit {

  estado: boolean = false


  cordenadas = []

  latitud = 0
  longitud = 0

  constructor(private routerOutlet: IonRouterOutlet, private modalController: ModalController,
    private servicioMapBox: MapboxService, private renderer: Renderer2,
    public alertController: AlertController, private geolocation: Geolocation,) {
  }


  ver() {
    console.log("hola");
  }

  obtenerCordenadas() {

    this.geolocation.watchPosition().subscribe((res: any) => {

      this.latitud = res.coords.latitude
      this.longitud = res.coords.longitude

      this.cordenadas.push([res.coords.longitude, res.coords.latitude])


      // console.log(this.cordenadas);

      //localStorage.setItem("latitudCar", res.coords.latitude)
      //localStorage.setItem("longitudCar", res.coords.longitude)

    });

  }


  crearDivMapa() {

    let contenedor2 = document.getElementById("contenedor")
    let mapa2 = document.createElement("div");
    mapa2.id = "map";
    mapa2.className = "map";
    contenedor2.appendChild(mapa2);

  }

  ngOnInit() {

    this.obtenerCordenadas()
    this.crearDivMapa()
    this.cargarmapa()

    /*setTimeout(
      () => {
        let boton = document.querySelector("#verMas");
        // Agregar listener
        boton.addEventListener("click", this.ver);
      }, 3000
    );*/

  }

  cargarmapa() {


    setTimeout(() => {

      let map = this.servicioMapBox.cargarMapa(this.latitud, this.longitud)

      const marcador2 = document.createElement('div');
      marcador2.className = 'marker2';
      // agregarmos el marcador al mapa
      new Mapboxgl.Marker(marcador2).setLngLat([this.longitud, this.latitud]).addTo(map);


      let market2: any = document.getElementsByClassName('marker2')
      setInterval(() => {

        if (market2.length <= 0) {

          //no existe
          const marcador2 = document.createElement('div');
          marcador2.className = 'marker2';
          // agregarmos el marcador al mapa
          new Mapboxgl.Marker(marcador2).setLngLat([this.longitud, this.latitud]).addTo(map);

        } else {
          //console.log("existe");

          for (let i = 0; i < this.cordenadas.length; i++) {

            let contenedorMapa = document.getElementsByClassName('mapboxgl-canvas-container');
            let market2: any = document.getElementsByClassName('marker2')
            contenedorMapa[0].removeChild(market2[0]);


            let marcador2 = document.createElement('div');
            marcador2.className = 'marker2';
            // agregarmos el marcador al mapa
            new Mapboxgl.Marker(marcador2).setLngLat(this.cordenadas[i]).addTo(map);
            
          }
        }
      }, 4000);

    }, 1500);
  }



  cambiarEstado() {
    this.estado = !this.estado;
  }


  doRefresh() {

    let contenedorMapa = document.getElementById("contenedor");
    let mapa: any = document.getElementById('map')
    contenedorMapa.removeChild(mapa);

    setTimeout(() => {
      this.ngOnInit()
    }, 1000);



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



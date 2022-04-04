import { Component, ElementRef, OnDestroy, OnInit, ViewChild, Renderer2, AfterViewInit, OnChanges, DoCheck } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { InfoVehiculoPage } from '../info-vehiculo/info-vehiculo.page';
import { MapboxService } from '../../../services/mapbox.service';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as Mapboxgl from 'mapbox-gl';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage implements OnInit {

  estado: boolean = false


  cordenadas = []

  latitud = 7.0620153
  longitud = -75.0933164


  constructor(
    private routerOutlet: IonRouterOutlet, private modalController: ModalController,
    private servicioMapBox: MapboxService, private renderer: Renderer2,
    public alertController: AlertController, private geolocation: Geolocation,
    private userservice: UsuarioService) {

    this.obtenerCordenadas()

  }

  // marcadores
  parqueaderos = {
    // tipo
    type: 'FeatureCollection',
    // arreglo con los marcadores
    features: [

    ]
  };

  map: Mapboxgl

  ngOnInit() {


    let token = localStorage.getItem('token')
    this.userservice.getparkingMap(token).subscribe((res: any) => {

      for (let i = 0; i < res.data.length; i++) {
      

        let datapar = {
          //tipo
          type: 'Feature',
          geometry: {
            type: 'Point',
            //cordenadas
            coordinates: [res.data[i].ubi.lat, res.data[i].ubi.lon]
          },
          // informacion al darle click al marcador
          properties: {
            id: res.data[i]._id,
            imagen: "hola",
            precio: res.data[i].price,

          }
        }

        //console.log(res.data[i].price);


        this.parqueaderos.features.push(datapar)

      }

    })

    this.crearDivMapa()

    setTimeout(() => {
      this.map = this.servicioMapBox.cargarMapa(this.latitud, this.longitud, this.parqueaderos)
    }, 1000);

    this.cargarmapa()


    let lat = localStorage.getItem('lat-parq')
    let lon = localStorage.getItem('lon-parq')

    if (lat === null || lon === null) {

    } else {

      let latiNum = Number(lat)
      let loniNum = Number(lon)

      this.crearRuta(latiNum, loniNum)

    }

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

    let mapaexiste = document.getElementById("map")
    if (mapaexiste != null) {
      //console.log("mapa existe");

    } else {

      //console.log("mapa no existe");


      let contenedor2 = document.getElementById("contenedor")
      let mapa2 = document.createElement("div");
      mapa2.id = "map";
      mapa2.className = "map";
      contenedor2.appendChild(mapa2);

    }
  }

  cargarmapa() {

    setTimeout(() => {

      const marcador2 = document.createElement('div');
      marcador2.className = 'marker2';
      // agregarmos el marcador al mapa
      new Mapboxgl.Marker(marcador2).setLngLat([this.longitud, this.latitud]).addTo(this.map);

      let market2: any = document.getElementsByClassName('marker2')
      setInterval(() => {

        if (market2.length <= 0) {

          //no existe
          const marcador2 = document.createElement('div');
          marcador2.className = 'marker2';
          // agregarmos el marcador al mapa
          new Mapboxgl.Marker(marcador2).setLngLat([this.longitud, this.latitud]).addTo(this.map);

        } else {
          //console.log("existe");

          for (let i = 0; i < this.cordenadas.length; i++) {

            let contenedorMapa = document.getElementsByClassName('mapboxgl-canvas-container');
            let market2: any = document.getElementsByClassName('marker2')
            contenedorMapa[0].removeChild(market2[0]);

            let marcador2 = document.createElement('div');
            marcador2.className = 'marker2';
            // agregarmos el marcador al mapa
            new Mapboxgl.Marker(marcador2).setLngLat(this.cordenadas[i]).addTo(this.map);

          }
        }
      }, 4000);

    }, 1000);
  }

  crearRuta(lat, lon) {

    setTimeout(() => {

      let cordenadasPar = []
      cordenadasPar.push(lat, lon)


      this.servicioMapBox.dibujarRuta(this.cordenadas[0], cordenadasPar).subscribe((res: any) => {

        let route = res.routes[0].geometry.coordinates

        this.map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: route
            }
          }
        })

        this.map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': 'white',
            'line-width': 5
          }
        })

        this.map.fitBounds([route[0], route[route.length-1] ],{
          padding:180
        })

      })

    }, 1300);
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



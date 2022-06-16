import { Component, OnInit } from '@angular/core';
import { MapaMarketService } from '../../../services/mapa-market.service';
import * as Mapboxgl from 'mapbox-gl';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


  latitud: number = 4.677532439351083
  longitud: number = -74.15661997403409

  map: Mapboxgl

  constructor(
    public mapaMarketService: MapaMarketService,
    private geolocation: Geolocation,
    private userServices: UsuarioService,
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private route: Router) {

    this.obtenerCordenadas()
  }

  obtenerCordenadas() {

    this.geolocation.watchPosition().subscribe((res: any) => {

      this.latitud = res.coords.latitude
      this.longitud = res.coords.longitude

    });

  }

  ngOnInit() {

    setTimeout(() => {
      this.map = this.mapaMarketService.cargarMapa(this.latitud, this.longitud)

      this.map.on('click', function (e) {

        let latitudNueva = JSON.stringify(e.lngLat.lat);
        let longitudNueva = JSON.stringify(e.lngLat.lng);

        localStorage.setItem('latitudNueva', latitudNueva)
        localStorage.setItem('longitudNueva', longitudNueva)

      });
      
    }, 2000);

  }

  actualizarUbicacion() {

    let token = localStorage.getItem('token')

    let latitudNueva = localStorage.getItem('latitudNueva')
    let longitudNueva = localStorage.getItem('longitudNueva')

    if (latitudNueva == null && longitudNueva == null) {

      this.msgError('Debes darle click a una nueva posicion en el mapa')

    } else {

      let id = this.activatedRoute.snapshot.paramMap.get('id')
      console.log(id);

      this.userServices.updateParkingUbicacion(token, id, { "ubi": { "lon": latitudNueva, "lat": longitudNueva } }).subscribe((res: any) => {

        this.msgBien(res.msg)

        localStorage.removeItem('latitudNueva')
        localStorage.removeItem('longitudNueva')

        this.route.navigate(['tabs2/mis-parqueaderos'])

      })
    }

  }

  async msgError(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 3500,
      cssClass: "rojo",
      mode: "ios",
      position: 'top'
    });
    toast.present();
  }

  async msgBien(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 3500,
      mode: "ios",
      color: "celeste",
      position: 'top'
    });
    toast.present();
  }


}

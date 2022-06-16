import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapaMarketService {

  constructor() { }

  cargarMapa(latitud: number, longitud: number, latParq, LonParq) {

    // token proporcionado por mapbox
    Mapboxgl.accessToken = environment.tokenMapbox;
    // creamos la constante del mapa
    const map = new Mapboxgl.Map({
      //con sus estilos
      style: 'mapbox://styles/kevinfc/ckyqjgmhc11yx15pin5y5qeip',
      // la posición en la que se va centrar el mapa al abrirse en ese caso la posición de nuestro usuario
      center: [longitud, latitud],
      // el zoom predeterminado al abrirse el mapa
      zoom: 15.3,
      // el div donde se va cargar el mapa
      container: 'map',
    });

    map.addControl(new Mapboxgl.FullscreenControl(), 'top-left');
    map.addControl(new Mapboxgl.NavigationControl(), 'top-left');


    let el = document.createElement('div');
    el.className = 'marker';
    let marker = new Mapboxgl.Marker(el, { anchor: 'bottom' });

    let elOpacity = document.createElement('div');
    elOpacity.className = 'markerOpacity';  
  
    new Mapboxgl.Marker(elOpacity).setLngLat([latParq, LonParq]).addTo(map);

    map.on("click", function (e) {
      marker.setLngLat(e.lngLat).addTo(map);
    });

    return map
  }
}

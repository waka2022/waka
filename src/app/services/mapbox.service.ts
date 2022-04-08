import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  constructor(private http: HttpClient, private router: Router) { }

  cargarMapa(latitud: number, longitud: number, parqueaderos) {

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


    /*let token = localStorage.getItem("token")
    this.userServices.getParking(token).subscribe(res =>{
      console.log(res);
    })*/


    //recorremos lso marcadores
    for (const feature of parqueaderos.features) {
      // creamos un HTML element para cada feactures
      const popupContent = document.createElement('div');

      popupContent.innerHTML = `
      <ion-grid>

      <ion-row>
            <ion-col size="12">
                <h2>${feature.properties.direccion}</h2>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="12">
                <i class="fa-solid fa-star-sharp"></i>
                <i class="fa-thin fa-star-sharp"></i>
                <i class="fa-light fa-star-sharp fa-2x"></i>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="6">
            Precio/hora
            <h5 class="mt-1">
               $ ${feature.properties.precio}
            </h5>
            </ion-col>

            <ion-col size="6">
            <h5>
            <i class="fas fa-car-side fa-1x "></i>
                <i class="fa-solid fa-bicycle fa-1x"></i>
            </h5>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="12">
                <ion-button class="verde" expand="full">
                    Disponible
                </ion-button>
            </ion-col>
        </ion-row>

      </ion-grid>`;

      const atag = document.createElement('div');

      atag.innerHTML = `
      <ion-row>
        <ion-col size="12">
            <ion-button id="${feature.properties.id} color="celeste" expand="full" id="verMas">
                <p class="animate__animated animate__bounceIn m-0 animate__fast">Ver mas</p>
            </ion-button>
        </ion-col>
      </ion-row>`

      popupContent.appendChild(atag);

      atag.addEventListener('click', (e) => {
        console.log('Button was clicked' + feature.properties.id);
        this.router.navigateByUrl('/tabs/info-parqueadero/' + feature.properties.id)
      })

      let popup = new Mapboxgl.Popup({
      }).setDOMContent(popupContent);

     
      const marcador = document.createElement('div');
      marcador.className = 'marker';
      // agregarmos el marcador al mapa
      new Mapboxgl.Marker(marcador).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(map);
    }

    return map
  }

  dibujarRuta(cordenadasCar, cordenadasPar) {

    //console.log(cordenadasPar);

    return this.http.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${cordenadasCar[0]},${cordenadasCar[1]};${cordenadasPar[0]},${cordenadasPar[1]}?steps=true&geometries=geojson&access_token=${environment.tokenMapbox}`)


  }
}



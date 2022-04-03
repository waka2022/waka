import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {


  constructor() { }

  
  cargarMapa(latitud:number, longitud:number) {
 
      // token proporcionado por mapbox
      Mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5mYyIsImEiOiJja3lxYWJ2cGowaHZ3MnVwaDlpd29kbWF4In0.q5c8f5xW-_vGaZFZ_RZsyQ';
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

      map.addControl(new Mapboxgl.NavigationControl(),'top-left');

      
      // marcadores
      const geojson = {
        // tipo
        type: 'FeatureCollection',
        // arreglo con los marcadores
        features: [
          {
            //tipo
            type: 'Feature',
            geometry: {
              type: 'Point',
              //cordenadas
              coordinates: [-75.498098, 6.2965197]
            },
            // informacion al darle click al marcador
            properties: {
              title: 'Africa',
              description: 'Parqueadeo SENA',
              imagen: "hola",
            }
          },
          {
            //tipo
            type: 'Feature',
            geometry: {
              type: 'Point',
              //cordenadas
              coordinates: [-66.3528622, 7.4769809]
            },
            // informacion al darle click al marcador
            properties: {
              title: 'Africa',
              description: 'Parqueadeo SENA',
              imagen: "hola",
            }
          }
        ]
      };

      //recorremos lso marcadores
      for (const feature of geojson.features) {
        // creamos un HTML element para cada feactures
        const marcador = document.createElement('div');
        marcador.className = 'marker';

        // agregarmos el marcador al mapa
        new Mapboxgl.Marker(marcador).setLngLat(feature.geometry.coordinates).addTo(map);


        // usamos la informacion al darle click al marcador para desplegarla en el mapa
        new Mapboxgl.Marker(marcador)
          .setLngLat(feature.geometry.coordinates)
          .setPopup(
            new Mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                `
                    <ion-grid>

                    <ion-row>
                      <ion-col size="12">
                      <ion-img src="../../../assets/parqueadero.jpg" class="img-market" ></ion-img>
                      </ion-col>
                    </ion-row>
                
                
                    <ion-row>
                      <ion-col size="6">
                        Horario <br>
                        10am - 5pm
                      </ion-col>
                      <ion-col size="6">
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-thin fa-star-sharp"></i>
                        <i class="fa-light fa-star-sharp fa-2x"></i>
                      </ion-col>
                    </ion-row>
                
                    <ion-row>
                      <ion-col size="6">
                        Precio hora <br>
                        $4.000
                      </ion-col>
                      <ion-col size="6">
                        <i class="fas fa-car-side fa-1x "></i>
                        <i class="fa-solid fa-bicycle fa-1x"></i>
                      </ion-col>
                    </ion-row>
                
                    <ion-row>
                      <ion-col size="12">
                        <ion-button class="verde" expand="full" > 
                          Disponible
                      </ion-button>
                      </ion-col>
                    </ion-row>

                    <ion-row>
                       <ion-col size="12">
                          <ion-button color="celeste" expand="full" id="verMas"> 
                            <p class="animate__animated animate__bounceIn m-0 animate__fast">Ver mas</p> 
                          </ion-button>
                        </ion-col>
                    </ion-row>
                
                  </ion-grid>
                  
                  `

              )

          ).addTo(map); // agregarmos al mapa

      } return map

      

    

  }
}



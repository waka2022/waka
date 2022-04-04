import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  constructor(private http: HttpClient) { }

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
                        ${feature.properties.precio}
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
                          <ion-button color="celeste" expand="full" id="verMas" href="/tabs/info-parqueadero/${feature.properties.id}">
                            <p class="animate__animated animate__bounceIn m-0 animate__fast">Ver mas</p> 
                          </ion-button>
                        </ion-col>
                    </ion-row>
                
                  </ion-grid>
                  
                  `
            )

        ).addTo(map); // agregarmos al mapa

    }

    return map


  }

  dibujarRuta(cordenadasCar, cordenadasPar){

    //console.log(cordenadasPar);
    
    return this.http.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${cordenadasCar[0]},${cordenadasCar[1]};${cordenadasPar[0]},${cordenadasPar[1]}?steps=true&geometries=geojson&access_token=${environment.tokenMapbox}`)
  
    
  }
}



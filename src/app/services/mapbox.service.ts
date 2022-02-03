import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  constructor() { }

  cargarMapa() {

    return new Promise((resolve, reject): any => {

      setTimeout(
        () => {
          Mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5mYyIsImEiOiJja3lxYWJ2cGowaHZ3MnVwaDlpd29kbWF4In0.q5c8f5xW-_vGaZFZ_RZsyQ';

          const map = new Mapboxgl.Map({
            style: 'mapbox://styles/kevinfc/ckyqjgmhc11yx15pin5y5qeip',
            center: [-74.230928,4.7119632],
            zoom: 15.3,
            pitch: 40,
            bearing: -17.6,
            container: 'map',
            antialias: true
          });

          map.on('load', () => {
            // Insert the layer beneath any symbol layer.
            const layers = map.getStyle().layers;
            const labelLayerId = layers.find(
              (layer) => layer.type === 'symbol' && layer.layout['text-field']
            ).id;

            // The 'building' layer in the Mapbox Streets
            // vector tileset contains building height data
            // from OpenStreetMap.
            map.addLayer(
              {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 14,
                'paint': {
                  'fill-extrusion-color': '#aaa',

                  // Use an 'interpolate' expression to
                  // add a smooth transition effect to
                  // the buildings as the user zooms in.
                  'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'height']
                  ],
                  'fill-extrusion-base': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'min_height']
                  ],
                  'fill-extrusion-opacity': 0.3
                }
              },
              labelLayerId
            );
          });


          map.addControl(new Mapboxgl.NavigationControl({

            showZoom: false

          }));
          map.addControl(new Mapboxgl.GeolocateControl({

            positionOptions: {
              enableHighAccuracy: true,
              visualizePitch: true
            },
            fitBoundsOptions: {
              maxZoom: 22,
            },
            trackUserLocation: true,
            showUserHeading: true,
            showAccuracyCircle: false

          }));

          resolve({
            map
          })
        }
        , 1000);

    })
  };
}



import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UsuarioService } from '../../../services/usuario.service';
Chart.register(...registerables);


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  mes
  dia
  año
  fecha
  parqueaderos: any = []

  constructor(private userServices: UsuarioService) {

  }

  ngOnInit() {


    let token = localStorage.getItem('token')
    this.traerParqueaderos(token)

    this.mes = new Date().getMonth()
    this.dia = new Date().getDate()
    this.año = new Date().getFullYear()


    if (this.mes < 10) {

      this.mes = '0' + this.mes

    }

    if (this.dia < 10) {


      this.dia = '0' + this.dia

    }

    this.fecha = `${this.año}-${this.mes}-${this.dia}`

    setTimeout(() => {

      let id_parq = this.parqueaderos[0].id      
      this.traerDatosGraficas(id_parq)

    }, 500);

    setTimeout(() => {
      this.generarGrafica();
    }, 1000);


  }

  traerDatosGraficas(id_parq){

    let token = localStorage.getItem('token')

    this.userServices.estTotalVehiculos(token, this.fecha,this.fecha,id_parq).subscribe(res =>{
      console.log(res);
    })
  }

  traerParqueaderos(token) {

    this.userServices.getParking(token).subscribe((res: any) => {

      for (let i = 0; i < res.data.length; i++) {

        let parqueadero = {
          id: res.data[i]._id,
          direccion: res.data[i].address
        }

        this.parqueaderos.push(parqueadero)
      }

    })

  }

  ionViewDidLeave() {
    this.parqueaderos = []
  }

  generarGrafica() {
    const chartLine: any = document.getElementById('chart-line');
    new Chart(chartLine, {
      type: 'bar',

      data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],

        datasets: [{
          label: 'Numero de parqueos',

          data: [12, 19, 3, 5, 2, 3, 3],

          backgroundColor: [
            'rgba(32, 158, 60, 0.64)',
            'rgba(158, 32, 32, 0.64)',
            'rgba(32, 158, 122, 0.64)'
          ],

          borderColor: [
            'rgb(32, 158, 60)',
            'rgb(158, 32, 32)',
            'rgb(32, 158, 122)'
          ],
          borderWidth: 1
        }]
      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    const chartDoughnut: any = document.getElementById('chart-doughnut');
    new Chart(chartDoughnut, {
      type: 'doughnut',

      data: {
        labels: ['Dia', 'Noche'],

        datasets: [{

          data: [12, 19],

          backgroundColor: [
            'rgba(32, 158, 60, 0.64)',
            'rgba(158, 32, 32, 0.64)',
            'rgba(32, 158, 122, 0.64)'
          ],

          borderColor: [
            'rgb(32, 158, 60)',
            'rgb(158, 32, 32)',
            'rgb(32, 158, 122)'
          ],
          borderWidth: 1
        }]
      },


    });

    const chartCircle: any = document.getElementById('chart-circle');
    new Chart(chartCircle, {
      type: 'pie',

      data: {

        labels: ['Moto', 'Carro', 'Bicicleta'],

        datasets: [{
          label: 'Numero de parqueos',

          data: [12, 19, 3],

          backgroundColor: [
            'rgba(32, 158, 60, 0.64)',
            'rgba(158, 32, 32, 0.64)',
            'rgba(32, 158, 122, 0.64)'
          ],

          borderColor: [
            'rgb(32, 158, 60)',
            'rgb(158, 32, 32)',
            'rgb(32, 158, 122)'
          ],
          borderWidth: 1
        }]
      },


    });


  }
}

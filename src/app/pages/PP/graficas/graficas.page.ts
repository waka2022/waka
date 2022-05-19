import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  fecha

  constructor() {

  }

  ngOnInit() {

    let mes = new Date().getMonth()
    let dia = new Date().getDate()
    let año = new Date().getFullYear()


    if (mes <= 9) {

      let fecha = `${año}-0${mes}-${dia}`
      this.fecha = fecha

    }

    if (dia <= 9) {

      let fecha = `${año}-${mes}-0${dia}`
      this.fecha = fecha

    }


    console.log(this.fecha);


    setTimeout(() => {
      this.generarGrafica();
    }, 1000);


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

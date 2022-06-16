import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastController } from '@ionic/angular';
Chart.register(...registerables);


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  public mes
  public dia
  public año
  public fechaInicio
  public fechaFinal
  public ingresos
  public cargarParq: boolean = false
  public parqueaderos: any = []
  public numCarros
  public numMotos
  public numBiciclcetas
  public chart
  public noHayDatos: boolean


  constructor(private userServices: UsuarioService, public toastController: ToastController) {


    this.mes = new Date().getMonth()
    this.dia = new Date().getDate()
    this.año = new Date().getFullYear()


    if (this.mes < 10) {

      this.mes = '0' + this.mes

    }

    if (this.dia < 10) {


      this.dia = '0' + this.dia

    }

    this.fechaInicio = `${this.año - 1}-${this.mes}-${this.dia}`
    this.fechaFinal = `${this.año + 1}-${this.mes}-${this.dia}`

  }

  ngOnInit() {

  }

  ionViewWillEnter() {

    let token = localStorage.getItem('token')
    this.traerParqueaderos(token)
  }

  ionViewDidLeave() {
    
    this.parqueaderos = []
    this.cargarParq = false
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

  traerParqueaderos(token) {

    this.userServices.getParking(token).subscribe((res: any) => {

      for (let i = 0; i < res.data.length; i++) {

        let parqueadero = {
          id: res.data[i]._id,
          direccion: res.data[i].address
        }

        this.parqueaderos.push(parqueadero)
      }

      let id_parq = this.parqueaderos[0].id
      this.cargarParq = true
      this.traerDatosGraficas(id_parq, this.fechaInicio, this.fechaFinal)

    })

  }

  traerDatosGraficas(id_parq, fechaInicio, fechaFinal) {

    let token = localStorage.getItem('token')

    this.userServices.estTotalVehiculos(token, fechaInicio, fechaFinal, id_parq).subscribe((res: any) => {
      console.log(res);
      this.numMotos = res.data[0].value
      this.numCarros = res.data[1].value
      this.numBiciclcetas = res.data[2].value
    })

    this.userServices.estTotalGanancias(token, fechaInicio, fechaFinal, id_parq).subscribe((res: any) => {

      //console.log(res.data.value);

      this.msgBien(res.msg)

      if (res.data.value == null) {

        this.ingresos = 0

      } else {

        this.ingresos = res.data.value
      }

    }, error => {

      this.msgError(error.error.msg)

    })

    setTimeout(() => {
      this.generarGrafica(this.numMotos, this.numCarros, this.numBiciclcetas);
    }, 1000);
  }

  generarGrafica(numMotos, numCarros, numBiciclcetas) {

    this.noHayDatos = false

    if (this.chart) {
      this.chart.destroy();
    }

    if (numMotos == 0 && numCarros == 0 && numBiciclcetas == 0) {
      
      this.noHayDatos = true
      return
    }

  
    this.noHayDatos = false

    const chartCircle: any = document.getElementById('chart-circle');
    this.chart = new Chart(chartCircle, {
      type: 'pie',

      data: {

        labels: ['Moto', 'Carro', 'Bicicleta'],

        datasets: [{
          label: 'Numero de parqueos',

          data: [numMotos, numCarros, numBiciclcetas],

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

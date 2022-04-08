import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vehiculos-parqueadero',
  templateUrl: './vehiculos-parqueadero.page.html',
  styleUrls: ['./vehiculos-parqueadero.page.scss'],
})
export class VehiculosParqueaderoPage implements OnInit {

  constructor(private userServices: UsuarioService, public toastController: ToastController) { }

  parqueaderos: any = []

  enCamino: boolean = true

  reservas: any = []

  ya: boolean = false

  parqueadero = new FormGroup({
    id_parqueadero: new FormControl('', [Validators.required]),
  });

  ngOnInit() {

  }

  ionViewWillEnter() {


    let token = localStorage.getItem('token')

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

  buscarReservas(id) {

    let token = localStorage.getItem('token')
    this.userServices.getAllReservatios(token, id).subscribe((res: any) => {

      this.reservas = res.data
      //console.log(this.reservas);
      console.log(this.reservas);

      this.ya = true


    })

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

  cambiarEstadoReserva(id_reser: string, estado: number) {


    let token = localStorage.getItem('token')

    console.log(id_reser);

    this.userServices.updateStatusReservation(token, id_reser, estado).subscribe((res: any) => {


      this.msgBien(res.msg)
      this.ionViewDidLeave()
      this.ionViewWillEnter()


    }, error => {
      this.msgError(error.error.msg)
    })

  }

}

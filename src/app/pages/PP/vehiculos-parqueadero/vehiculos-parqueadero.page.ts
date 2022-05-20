import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vehiculos-parqueadero',
  templateUrl: './vehiculos-parqueadero.page.html',
  styleUrls: ['./vehiculos-parqueadero.page.scss'],
})
export class VehiculosParqueaderoPage implements OnInit {

  constructor(private userServices: UsuarioService, public toastController: ToastController,
    public alertController: AlertController) { }

  parqueaderos: any = []
  enCamino: boolean = true
  reservas: any = []
  ya: boolean = false
  tiempoReserva:number

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
    this.userServices.getAllReservatios(token, id, true).subscribe((res: any) => {

      this.reservas = res.data

      //console.log(this.reservas);
      console.log(this.reservas);

    })

    this.ya = true

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

  async cobrarAlert(tiempo, id_reser, estado){

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Factura de la reserva',
      message: `<h5 class="d-inline"> Este usuario lleva <h4 class="text-white d-inline ">${tiempo} Hora</h4> 
                El monto a pagar es <h4 class="text-white d-inline ">______</h4> </h5>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            
          }
        }, {
          text: 'Cobrar',
          id: 'confirm-button',
          handler: () => {
            this.cambiarEstadoReserva(id_reser, estado)
          }
        }
      ]
    });

    await alert.present();

  }

  cobrar(id_reser:string, estado:number) {

    let token = localStorage.getItem('token')

    this.userServices.getTimeReservation(token,id_reser).subscribe((res:any)=>{

      let tiempo = res.data
      this.cobrarAlert(tiempo,id_reser,estado)
      
    })
  }


  cambiarEstadoReserva(id_reser: string, estado: number) {

    let token = localStorage.getItem('token')

    this.userServices.updateStatusReservation(token, id_reser, estado).subscribe((res: any) => {

      this.msgBien(res.msg)


      //console.log(id_reser);

      this.userServices.getReservationForId(token, id_reser).subscribe((res: any) => {
        //console.log(res.data.id_park);
        let id_park = res.data.id_park

        this.userServices.getAllReservatios(token, id_park, true).subscribe((res: any) => {

          this.reservas = res.data
          //console.log(this.reservas);

        })

      })


    }, error => {

      this.msgError(error.error.msg)

    })

  }

}

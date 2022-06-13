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


  parqueaderos: any = []
  enCamino: boolean = true
  reservas: any = []
  ya: boolean = false
  tiempoReserva: number
  estado:boolean = false

  constructor(private userServices: UsuarioService, public toastController: ToastController,
    public alertController: AlertController) { 

      
    }

  parqueadero = new FormGroup({
    id_parqueadero: new FormControl('', [Validators.required]),
  });

  ngOnInit() {

  }
  
  obtenerEstado(value,id){

    this.estado = value
    this.buscarReservas(id)
    
  }

  recargar(id){
    this.buscarReservas(id)   
  }

  ionViewWillEnter() {

    this.traerParqueaderos()
  }
  
  traerParqueaderos(){  

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
    this.userServices.getAllReservatios(token, id, !this.estado).subscribe((res: any) => {

      this.reservas = res.data

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

  async cobrarAlert(tiempo, id_reser, estado, ph) {

    if (tiempo === 0) {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Factura de la reserva',
        message: `<h5 class="d-inline"> Este usuario lleva <h4 class="text-white d-inline ">${tiempo} Hora</h4> 
                  El monto a pagar es <h4 class="text-white d-inline ">$ ${ph}</h4> </h5>`,
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

    } else {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Factura de la reserva',
        message: `<h5 class="d-inline"> Este usuario lleva <h4 class="text-white d-inline ">${tiempo} Hora</h4> 
                  El monto a pagar es <h4 class="text-white d-inline">$ ${ph * tiempo}</h4> </h5>`,
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



  }

  cobrar(id_reser: string, id_park: string, estado: number) {

    let token = localStorage.getItem('token')

    this.userServices.getTimeReservation(token, id_reser).subscribe((res: any) => {

      let tiempo = res.data

      this.userServices.getParkingForId(token, id_park).subscribe((res: any) => {

        let ph = res.data.price

        this.cobrarAlert(tiempo, id_reser, estado, ph)
      })

    })
  }


  cambiarEstadoReserva(id_reser: string, estado: number) {

    let token = localStorage.getItem('token')

    this.userServices.updateStatusReservation(token, id_reser, estado).subscribe((res: any) => {


      if (estado === 2) {

        this.userServices.crearFactura(token, id_reser).subscribe(res=>{
          console.log(res);
          this.userServices.finalizarPago(token,id_reser).subscribe((res:any)=>{

            this.msgBien(res.msg)

          }, error =>{
            this.msgError(error.error.msg)
          })
        })
      }

      this.userServices.getReservationForId(token, id_reser).subscribe((res: any) => {
        //console.log(res.data.id_park);
        let id_park = res.data.id_park
        this.userServices.getAllReservatios(token, id_park, true).subscribe((res: any) => {
          this.reservas = res.data
          //console.log(this.reservas);

        })

      })


    })
  }

}

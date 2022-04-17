import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.page.html',
  styleUrls: ['./recibo.page.scss'],
})
export class ReciboPage implements OnInit {


  reservas: any = []
  id_parqueadero: boolean
  time_reserva: number

  constructor(private usuarioService: UsuarioService, public alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    let par_id = localStorage.getItem('id-parq')

    if (par_id === null) {

      this.id_parqueadero = false

    } else {

      this.id_parqueadero = true

      let token = localStorage.getItem('token')

      this.usuarioService.getAllReservatiosUser(token, true).subscribe((res: any) => {

        this.reservas = res.data
        let id_reserv = res.data[0]._id

        console.log(res);

        this.usuarioService.getTimeReservation(token, id_reserv).subscribe((res: any) => {

          this.time_reserva = res.data


        })


      })
    }

  }

  ionViewDidLeave() {
    this.reservas = []
  }

  async pagoAlert(tiempo , price) {

    if (tiempo === 0) {
      
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Factura de la reserva',
        message: `<h5 class="d-inline"> lleva <h4 class="text-white d-inline ">${tiempo} Hora</h4> 
                  El monto a pagar es <h4 class="text-white d-inline ">${price}</h4> </h5>`,
        buttons: ['OK']
      });
  
      await alert.present();

    }else{

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Factura de la reserva',
        message: `<h5 class="d-inline"> lleva <h4 class="text-white d-inline ">${tiempo} Hora</h4> 
                  El monto a pagar es <h4 class="text-white d-inline ">${price * tiempo}</h4> </h5>`,
        buttons: ['OK']
      });
  
      await alert.present();

    }

  }

  verPago(id_reser: string, price) {

    let token = localStorage.getItem('token')
    
    this.usuarioService.getTimeReservation(token, id_reser).subscribe((res: any) => {

      let tiempo = res.data

      this.pagoAlert(tiempo, price)

    })
    
  }





}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-info-parqueadero',
  templateUrl: './info-parqueadero.page.html',
  styleUrls: ['./info-parqueadero.page.scss'],
})
export class InfoParqueaderoPage implements OnInit {

  estado: boolean = true

  infoparqueadero: any = {
    _id: '',
    id_user: {
      names: ''
    },
    type_security: {
      cams: false
    },
    type_parks: {
      _0: false,
      _1: false,
      _2: false
    }
  }

  id_parqueadero: boolean
  latparq: string
  lonparq: string
  calificacion:number

  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService,
    private route: Router, public toastController: ToastController) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {

    setTimeout(() => {
      this.traerInformacionParque()
    }, 500);

  }


  traerInformacionParque() {

    let token = localStorage.getItem('token')
    let id = this.activatedRoute.snapshot.paramMap.get('id')

    let par_id = localStorage.getItem('id-parq')

    if (par_id === null && id === "0") {

      //console.log("no hay parqueadero");

      this.id_parqueadero = false

    } else {

      if (par_id === null) {

        this.id_parqueadero = true

        this.estado = false;

        this.usuarioService.getParkingForId(token, id).subscribe((res: any) => {

          console.log(res.data);

          this.infoparqueadero = res.data

          this.latparq = res.data.ubi.lat
          this.lonparq = res.data.ubi.lon

          this.usuarioService.vercalificarParqueadero(token,id).subscribe((res:any)=>{
            console.log(res.data);
          })

        })

      } else {

        this.estado = true;
        this.id_parqueadero = true

        this.usuarioService.getParkingForId(token, par_id).subscribe((res: any) => {

          console.log(res.data);

          this.infoparqueadero = res.data

          this.latparq = res.data.ubi.lat
          this.lonparq = res.data.ubi.lon

          this.usuarioService.vercalificarParqueadero(token,par_id).subscribe((res:any)=>{

            let calificacion = Math.round(res.data);
            this.calificacion = calificacion

          })

        })

      }



    }

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

  cambiarEstado() {

    if (this.estado === false) {

      let token = localStorage.getItem('token')
      let idvehi = localStorage.getItem('id_vehiculo')

      if (!!idvehi === false) {

        this.msgError("Por favor seleccione un vehiculo")
        this.route.navigate(['tabs/mapa'])

      } else {

        localStorage.setItem('lat-parq', this.latparq)
        localStorage.setItem('lon-parq', this.lonparq)
        localStorage.setItem('id-parq', this.infoparqueadero._id)

        let idparq = localStorage.getItem('id-parq')

        let reservacion = {
          id_park: idparq,
          id_vehicle: idvehi
        }

        this.usuarioService.requestReservation(token, reservacion).subscribe((res: any) => {

          this.msgBien(res.msg)

        }, error => {
          this.msgError(error.msg)

          localStorage.removeItem('lat-parq')
          localStorage.removeItem('lon-parq')
          localStorage.removeItem('id-parq')

        })

        this.route.navigate(['tabs/mapa'])
      }

    } else {

      let token = localStorage.getItem('token')

      this.usuarioService.getAllReservatiosUser(token, true).subscribe((res: any) => {
        console.log(res);

        let id_Reserv = res.data[res.data.length - 1]._id

        this.usuarioService.updateStatusReservation(token, id_Reserv, 3).subscribe((res: any) => {
          //console.log(res);
          this.msgBien(res.msg)

          localStorage.removeItem('lat-parq')
          localStorage.removeItem('lon-parq')
          localStorage.removeItem('id-parq')
          localStorage.removeItem('calificacion')

          this.route.navigate(['tabs/mapa'])

        }, error => {
          this.msgError(error.error.msg)
        })

      })

    }


  }

}

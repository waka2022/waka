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

  infoparqueadero:any = {
  }

  id_parqueadero: boolean

  latparq: string
  lonparq: string

  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private route: Router, public toastController: ToastController) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.traerInformacionParque()
    }, 1000);
    
  }

  traerInformacionParque() {

    let token = localStorage.getItem('token')
    let id = this.activatedRoute.snapshot.paramMap.get('id')

    let par_id = localStorage.getItem('id-parq')

    if (par_id === null && id === "0") {

      //console.log("no hay parqueadero");

      this.id_parqueadero = false

    } else {

      this.id_parqueadero = true

      //console.log("si hay parqueadero");

      if (par_id === null) {

        this.estado = !this.estado;

        this.usuarioService.getParkingForId(token, id).subscribe((res: any) => {

          console.log(res.data);

          this.infoparqueadero = res.data

          this.latparq = res.data.ubi.lat
          this.lonparq = res.data.ubi.lon

        })

      } else {

       
        this.usuarioService.getParkingForId(token, par_id).subscribe((res: any) => {

          console.log(res.data);
          
          this.infoparqueadero = res.data

          this.latparq = res.data.ubi.lat
          this.lonparq = res.data.ubi.lon

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
      color:"celeste",
      position: 'top'
    });
    toast.present();
  }

  cambiarEstado() {

    if (this.estado === false) {

      localStorage.setItem('lat-parq', this.latparq)
      localStorage.setItem('lon-parq', this.lonparq)
      localStorage.setItem('id-parq', this.infoparqueadero._id)


      let token = localStorage.getItem('token')
      let idparq = localStorage.getItem('id-parq')
      let idvehi = localStorage.getItem('id_vehiculo')

      let reservacion = {
        id_park: idparq,
        id_vehicle:  idvehi
      }

      this.usuarioService.requestReservation(token, reservacion).subscribe((res:any) => {

        //console.log(res);
        this.msgBien(res.msg)
        
      },error =>{
        this.msgError(error.msg)

        localStorage.removeItem('lat-parq')
        localStorage.removeItem('lon-parq')
        localStorage.removeItem('id-parq')
        
      })

      this.route.navigate(['tabs/mapa'])

    } else {

      localStorage.removeItem('lat-parq')
      localStorage.removeItem('lon-parq')
      localStorage.removeItem('id-parq')

      this.route.navigate(['tabs/mapa'])

    }


  }

}

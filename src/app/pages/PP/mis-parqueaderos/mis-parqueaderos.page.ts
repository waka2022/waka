import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { ModalController } from '@ionic/angular';
import { AgregarParqueaderoPage } from '../agregar-parqueadero/agregar-parqueadero.page';
import { EmmitersService } from '../../../services/emmiters.service';

@Component({
  selector: 'app-mis-parqueaderos',
  templateUrl: './mis-parqueaderos.page.html',
  styleUrls: ['./mis-parqueaderos.page.scss'],
})
export class MisParqueaderosPage implements OnInit {

  constructor(private userServices: UsuarioService, private modalController: ModalController, private emmiter: EmmitersService) { }

  parqueaderos = []

  ngOnInit() {

    this.getParqueadero()

    this.emmiter.$emmiterProfile.subscribe(
      resp => this.getParqueadero()
    )
    
  }

  getParqueadero(){

    let token = this.userServices.traerToken()

    this.userServices.getParking(token).subscribe((res:any) => {
    
      this.parqueaderos = res.data
      console.log(this.parqueaderos)

    })
  }

  async presentModal() {

    const modal = await this.modalController.create({
      component: AgregarParqueaderoPage,
      initialBreakpoint: 1,
      breakpoints: [0.0, 0.5, 1],
      showBackdrop: true,


    });

    await modal.present();
  }

}

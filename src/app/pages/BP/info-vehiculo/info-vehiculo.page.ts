import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormularioAgregarVehiculoPage } from '../formulario-agregar-vehiculo/formulario-agregar-vehiculo.page';
import { UsuarioService } from '../../../services/usuario.service';
import { EmmitersService } from '../../../services/emmiters.service';

@Component({
  selector: 'app-info-vehiculo',
  templateUrl: './info-vehiculo.page.html',
  styleUrls: ['./info-vehiculo.page.scss'],
})
export class InfoVehiculoPage implements OnInit {

  carros = []

  constructor(private modalController: ModalController, private usuarioService:UsuarioService,private emmiter: EmmitersService ) { }

  ngOnInit() {
    this.getCarrosUser()
    this.emmiter.$emmiterProfile.subscribe(
      resp => this.getCarrosUser()
    )
  }

  async presentModa2() {

    const modal = await this.modalController.create({
      component: FormularioAgregarVehiculoPage,
      initialBreakpoint: 1,
      breakpoints: [0.0, 0.5, 1],
      showBackdrop: true,
      swipeToClose: true,
      keyboardClose: true
    
    });

    await modal.present();
  }

  getCarrosUser(){

    let token = this.usuarioService.traerToken()

    this.usuarioService.getCarrosUser(token).subscribe( (res:any) =>{

      this.carros = res.data
      console.log(this.carros)
     
    })
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}

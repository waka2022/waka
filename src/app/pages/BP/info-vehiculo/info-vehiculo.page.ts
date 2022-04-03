import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormularioAgregarVehiculoPage } from '../formulario-agregar-vehiculo/formulario-agregar-vehiculo.page';
import { ActualizarvehiculoPage } from '../actualizarvehiculo/actualizarvehiculo.page';
import { UsuarioService } from '../../../services/usuario.service';
import { EmmitersService } from '../../../services/emmiters.service';

@Component({
  selector: 'app-info-vehiculo',
  templateUrl: './info-vehiculo.page.html',
  styleUrls: ['./info-vehiculo.page.scss'],
})
export class InfoVehiculoPage implements OnInit {


  carros = {}


  constructor(private modalController: ModalController, 
    private router: Router,
    private usuarioService:UsuarioService,
    private alertController:AlertController,
    private emmiter: EmmitersService ) { }

  ngOnInit() {
    this.getCarrosUser()
    this.emmiter.$emmiterProfile.subscribe(
      resp => this.getCarrosUser()
    )


  }

  getCarrosUser(){

     let token = this.usuarioService.traerToken()

     this.usuarioService.getCarrosUser(token).subscribe( (res:any) =>{
     this.carros = res.data

       console.log(this.carros)
     
 })

  }

  async presentModa1(id) {

    const modal = await this.modalController.create({
      component: ActualizarvehiculoPage ,
      initialBreakpoint: 1,
      breakpoints: [0.0, 0.5, 1],
      showBackdrop: true,
      swipeToClose: true,
      keyboardClose: true
    
    });

    await modal.present();
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

  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  //*generando la alerta para avisar al usuario de eliminar un vehiculo
  async alertDeleteVehicle(id) {
    const alert = await this.alertController.create({
      //nombre para dar estilos a la misma
      cssClass: 'my-custom-class',
      //tiutlo de la alerta
      header: 'Eliminar vehiculo',
      //mensaje o centendio de la alerta
      message: 'El vehiculo se eliminara definitivamente',
      //tendra dos botones (cancelar y confirmar)
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'btn1',
          handler: () => {
            console.log('Cancel delete');
          }
        },
        //!en el boton confirmar eliminara el vehiculo 
        {
          text: 'Confirmar',
          cssClass: 'btn2',
          handler: () => {
            let token = localStorage.getItem("token");
            this.usuarioService.eliminarVehiculo(token, id).subscribe(
              (res: any) => {
                this.emmiter.$emmiterProfile.emit(true)
                //this.router.navigate(['tabs'])   
                console.log(res)
              })}
             
        }
      ]
    });

    await alert.present();
  }


}

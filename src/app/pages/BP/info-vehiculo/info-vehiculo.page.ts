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


  //array para traer todos los carros de un usario
  carros = {}


  constructor(private modalController: ModalController, 
    private router: Router,
    private usuarioService:UsuarioService,
    private alertController:AlertController,
    private emmiter: EmmitersService ) { 

      
    }

  //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {
    //iniciar la funcion get carro user para mostrar todos los carros de mi cuenta
    this.getCarrosUser()
    this.emmiter.$emmiterProfile.subscribe(
      resp => this.getCarrosUser()
    )


  }

  //* funcion para implementar el servicio carros de un usuario
  getCarrosUser(){
  //token para enviar al servicio
     let token = this.usuarioService.traerToken()
  // se llama el sevicio  donde se debe enviar el token
     this.usuarioService.getCarrosUser(token).subscribe( (res:any) =>{
       //guradando los distintio carros en el array carros para mostrarlos 
     this.carros = res.data

       console.log(this.carros)  
    })
  }

  
//* modal para abrir crear un nuevo vehiculo
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

  //*generando la alerta para avisar al usuario de eliminar un vehiculo  enviando el id del carro
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
            //se traer el token 
            let token = localStorage.getItem("token");
            //servicio eliminar vehiculo donde se debe enviar el token y id
            this.usuarioService.eliminarVehiculo(token, id).subscribe(
              (res: any) => {
                //cuando hay un cambio se actualiza la vista
                this.emmiter.$emmiterProfile.emit(true)
                console.log(res)
              })}
             
        }
      ]
    });

    await alert.present();
  }


}

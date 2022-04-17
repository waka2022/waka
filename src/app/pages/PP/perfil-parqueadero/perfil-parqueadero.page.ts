import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-parqueadero',
  templateUrl: './perfil-parqueadero.page.html',
  styleUrls: ['./perfil-parqueadero.page.scss'],
})
export class PerfilParqueaderoPage implements OnInit {

  usuario:any = {
    phone:"",
    email_t:{
      email:""
    }
  }
  mssg :string

  constructor(private usuService : UsuarioService, 
              public alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.traerInfoUsuario()
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar la cuenta',
      subHeader: 'La eliminación de cuenta es definitiva Al eliminarla',
      message: 'tu cuenta de WAKA y toda la información tambien se eliminará',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'btn1',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'Confirmar',
          cssClass: 'btn2',
          handler: () => {
            console.log('Confirm');{
            let token = localStorage.getItem("token");

            this.usuService.inhabilitarUsuario(token).subscribe(
              (res: any) => {
                console.log(res)
                this.mssg = res.msg
              })}
          }
        }
      ]
    });

    await alert.present();
  }

  traerInfoUsuario(){

    let token = localStorage.getItem("token")

    this.usuService.getInfo( token ).subscribe((res:any) => {
      console.log(res);
      
      this.usuario = res.data
    
    })

  }

  cerrarSesion(){
    localStorage.removeItem('token')
    this.router.navigate(['inicio'])
  }

}

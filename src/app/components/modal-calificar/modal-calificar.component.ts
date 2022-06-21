import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-modal-calificar',
  templateUrl: './modal-calificar.component.html',
  styleUrls: ['./modal-calificar.component.scss'],
})
export class ModalCalificarComponent implements OnInit {

  @Input() id_parq: string;

  disabled = false

  constructor(public alertController: AlertController, public usuarioService: UsuarioService,
    public toastController: ToastController) { }

  token: string
  ngOnInit() {

    let token = localStorage.getItem('token')
    this.token = token 
    
    let calificacion = localStorage.getItem('calificacion')

    if(calificacion == 'true'){
      this.disabled = true

    }else{
      this.disabled = false
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

  async calificar() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: '',
      message: '¿ Que tal te parecio el servicio ?',
      id: '',
      buttons: [
        {
          cssClass: 'rating__star far fa-star',
          text: '1',
          id: 'rating',
          handler: () => {

            let calificacion = {

              "id_parking": this.id_parq,
              "coment": "",
              "ranking": 1

            }
            this.serviciocalificar(calificacion)
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '2',
          id: 'rating',
          handler: () => {
            let calificacion = {

              "id_parking": this.id_parq,
              "coment": "",
              "ranking": 2

            }
            this.serviciocalificar(calificacion)
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '3',
          id: 'rating',
          handler: () => {
            let calificacion = {

              "id_parking": this.id_parq,
              "coment": "",
              "ranking": 3

            }
            this.serviciocalificar(calificacion)
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '4',
          id: 'rating',
          handler: () => {
            let calificacion = {

              "id_parking": this.id_parq,
              "coment": "",
              "ranking": 4

            }
            this.serviciocalificar(calificacion)
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '5',
          id: 'rating',
          handler: () => {
            let calificacion = {

              "id_parking": this.id_parq,
              "coment": "",
              "ranking": 5

            }
            this.serviciocalificar(calificacion)
          }
        }
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  serviciocalificar(calificacion){

    this.usuarioService.calificarParqueadero(this.token, calificacion).subscribe((res:any) => {
              
      this.msgBien(res.msg)
      localStorage.setItem('calificacion','true')

      this.ngOnInit()

    },error =>{
      console.log(error);
      
      this.msgError(error.error.msg)
    })
  }

}

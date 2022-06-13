import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { ModalController, ToastController } from '@ionic/angular';
import { AgregarParqueaderoPage } from '../agregar-parqueadero/agregar-parqueadero.page';
import { EmmitersService } from '../../../services/emmiters.service';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mis-parqueaderos',
  templateUrl: './mis-parqueaderos.page.html',
  styleUrls: ['./mis-parqueaderos.page.scss'],
})
export class MisParqueaderosPage implements OnInit {

  constructor(private sanitizer: DomSanitizer, private userServices: UsuarioService, private modalController: ModalController, private emmiter: EmmitersService,
    public alertController: AlertController, private geolocation: Geolocation, public toastController: ToastController) { }

  parqueaderos:any = []

  msg: string
  error: boolean = false

  //contiene la previsualizacion base64
  public previsualizacion: string;

  //contiene la imagene el valor es asigando  (input)
  public archivos:any=[]

  ngOnInit() {

    this.emmiter.$emmiterProfile.subscribe(
      resp => {
        this.getParqueadero()
      }

    )
  }

  ionViewWillEnter() {

    setTimeout(() => {
      this.getParqueadero()
    }, 1000);

  }

  ionViewDidLeave() {
    this.parqueaderos = []

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

  getParqueadero() {

    let token = this.userServices.traerToken()

    this.userServices.getParking(token).subscribe((res: any) => {

      this.parqueaderos = res.data
      console.log(this.parqueaderos.ubi);
      
      this.error = false

    }, error => {

      console.log(error.ok);

      this.error = !error.ok
      this.msg = error.error.msg

    })
  }

  borrarParqueadero(id) {

    let token = this.userServices.traerToken()

    this.userServices.borrarParking(token, id).subscribe((res: any) => {

      this.msgBien(res.msg)
      this.ionViewDidLeave()
      this.ionViewWillEnter()

    }, error => {

      this.msgError(error.error.msg)

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

  async AlertConfirmUbicacion(parqueadero_id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualizar ubicacion',
      message: 'Estas a punto de actualizar la ubicacion de este parqueadero, asegurece de estar en su parqueadero para hacer este proceso',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          id: 'confirm-button',
          handler: () => {

            this.geolocation.getCurrentPosition().then((resp) => {

              let token = this.userServices.traerToken()

              let ubi = {
                ubi: {

                  "lon": resp.coords.latitude,
                  "lat": resp.coords.longitude

                }

              }
            
              this.userServices.updateParkingUbicacion(token, parqueadero_id, ubi).subscribe((res: any) => {

                this.msgBien(res.msg)
                this.ionViewWillEnter()

              })


            }).catch((error) => {

              this.msgError('Erro: Asegurece de tener la ubicacion activa' + error)
            });

          }
        }
      ]
    });

    await alert.present();
  }

  cambiasEstado(parqueadero_id) {

    let token = localStorage.getItem('token')

    this.userServices.getParkingForId(token, parqueadero_id).subscribe((res: any) => {

      let parqueadero = {

        address: '',
        type_parks: {
          _0: false,
          _1: false,
          _2: false
        },
        type_security: {
          cams: false,
          vigilant: false
        },
        descript: '',
        availability: false,
        quotas: {
          totals: 0
        },
        space: '',
        price: 0
      }

      parqueadero = res.data

      parqueadero.availability = !parqueadero.availability

      this.userServices.updateParking(token, parqueadero_id, parqueadero).subscribe(res => {

        this.ionViewDidLeave()
        this.ionViewWillEnter()

      })
    })




    console.log(parqueadero_id);

  }

  //*subir archivo
  capturaFile(event):any{

    //constante que contiene la ruta donde esta la informacion del archivo
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any )=> {
      console.log(imagen);
      this.previsualizacion = imagen.base;
    })
    this.archivos.push(archivoCapturado);

    // console.log(archivoCapturado);
  }


  //*previsualizacion de la img (base64)
  extraerBase64 = async ($event:any) => new Promise((resolve, reject) =>{
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          // Blob:$event,
          // image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          // Blob: $event,
          // image,
          base: null
        });
      };
    }catch (e){
      return null;
    }
    
  })
}

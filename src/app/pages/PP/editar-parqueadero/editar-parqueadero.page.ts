import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-parqueadero',
  templateUrl: './editar-parqueadero.page.html',
  styleUrls: ['./editar-parqueadero.page.scss'],
})
export class EditarParqueaderoPage implements OnInit {


  parqueadero = {

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

  id:any

  espacio:number

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, public toastController: ToastController) {

    this.getparqueadero()

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

  info = new FormGroup({

    address: new FormControl('', [Validators.required, Validators.minLength(4)]),
    cams: new FormControl('false', Validators.required),
    vigilant: new FormControl('false', Validators.required),
    Carros: new FormControl('false', Validators.required),
    Motos: new FormControl('false', Validators.required),
    Bicicletas: new FormControl('false', Validators.required),
    descript: new FormControl('', [Validators.required, Validators.minLength(4)]),
    cupos: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    espacio: new FormControl('', [Validators.required]),

  });

  ngOnInit() {
  }

  getparqueadero() {
    let token = this.usuarioService.traerToken()

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.id = id

    this.usuarioService.getParkingForId(token, id).subscribe((res: any) => {

      this.parqueadero = res.data
      console.log(this.parqueadero);

      this.espacio = Number(this.parqueadero.space)     
      
      console.log(this.espacio);

    })
  }

  addInfo() {

    if (this.info.invalid){
      return Object.values(this.info.controls).forEach(control=>{
        control.markAsTouched();
      })
    }

    let token = this.usuarioService.traerToken()

    let infoPar = {

      address: this.info.value.address,
      type_parks: {
        _0: this.info.value.Motos,
        _1: this.info.value.Carros,
        _2: this.info.value.Bicicletas
      },
      type_security: {
        cams: this.info.value.cams,
        vigilant: this.info.value.vigilant
      },
      descript: this.info.value.descript,
      availability: false,
      quotas: {
        totals: this.info.value.cupos
      },
      space: this.info.value.espacio,
      price: this.info.value.precio

    }


    this.usuarioService.updateParking(token, this.id, infoPar).subscribe((res:any) => {
     
      this.msgBien(res.msg)

      this.router.navigate(['tabs2/mis-parqueaderos'])
    }, error =>{
      this.msgError(error.msg)
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { ModalController } from '@ionic/angular';
import { EmmitersService } from '../../../services/emmiters.service';
import { MapboxService } from '../../../services/mapbox.service';



@Component({
  selector: 'app-agregar-parqueadero',
  templateUrl: './agregar-parqueadero.page.html',
  styleUrls: ['./agregar-parqueadero.page.scss'],
})
export class AgregarParqueaderoPage implements OnInit {

  disabled: boolean = false

  ubi

  latitud = 0
  longitud = 0

  constructor(private usuarioService: UsuarioService, private modalController: ModalController, private emmiter: EmmitersService,) { }

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

  addInfo() {

    console.log(this.info);
    

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

    this.usuarioService.addParking(token, infoPar).subscribe(res => {
      console.log(res)
      this.emmiter.$emmiterProfile.emit(true)
    })

    this.dismiss()

  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}

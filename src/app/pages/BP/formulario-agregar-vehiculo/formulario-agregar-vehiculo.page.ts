import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { EmmitersService } from '../../../services/emmiters.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-formulario-agregar-vehiculo',
  templateUrl: './formulario-agregar-vehiculo.page.html',
  styleUrls: ['./formulario-agregar-vehiculo.page.scss'],
})
export class FormularioAgregarVehiculoPage implements OnInit {

  constructor( private usuarioService:UsuarioService, private emmiter: EmmitersService, private modalController: ModalController) { }

  car = new FormGroup({
    global: new FormControl('', Validators.required),
    mark: new FormControl('', [Validators.required, Validators.minLength(3)]),
    model: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4),Validators.pattern('[0-9]{4}')]),
    placa: new FormControl('', [Validators.required, Validators.minLength(6),Validators.pattern('[A-Z]{3}[0-9]{3}|[A-Z]{1}')]),
    color: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  ngOnInit() {
    
  }
  
  addCar(){

    let infoCar = {
      type_vehi:{
        global: this.car.value.global,
        mark: this.car.value.mark,
        model: `${this.car.value.model}`,
        placa: this.car.value.placa,
        color: this.car.value.color,
      }
    }

    let token = this.usuarioService.traerToken()

    this.usuarioService.addVehicleUser(token, infoCar).subscribe(res => {
      console.log(res)
      //cuando se genera un nuevo carro se actualiza la vista de carro
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

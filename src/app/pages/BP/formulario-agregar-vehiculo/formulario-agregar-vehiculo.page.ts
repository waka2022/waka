//?importando componentes angular alojados en angular/core
import { Component, OnInit } from '@angular/core';

//?importando formularios reactvios de angular alojasdos en angular/core
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

//?importando servicio de usuaurio para su uso alojado en ../../../services/usuario.service
import { UsuarioService } from '../../../services/usuario.service';

//?importando el servicio de emmiter para la apikey  alojado en ../../../services/emmiters.service
import { EmmitersService } from '../../../services/emmiters.service';

//?importando modal controller para controladores de ionic alojado en ionic/angular
import { ModalController } from '@ionic/angular';


//!componentes los cuales conectac y refieren a los distintos archivos de agregar-vehiculo
@Component({
  selector: 'app-formulario-agregar-vehiculo',
  templateUrl: './formulario-agregar-vehiculo.page.html',
  styleUrls: ['./formulario-agregar-vehiculo.page.scss'],
})

//**exportando la clase Regsitro y implementando OnInit para el ciclo de vida del mismo */
export class FormularioAgregarVehiculoPage implements OnInit {

    //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
    //en este caso estamos mandando como parametro los servicios a implemetnar y controller
  constructor( private usuarioService:UsuarioService, private emmiter: EmmitersService, private modalController: ModalController) { }

  //generando el formulario mediante formulario reactivo
  car = new FormGroup({
    global: new FormControl('',Validators.required ),
    mark: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //pattern para validar que el dato sea  4 números
    model: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4),Validators.pattern('[0-9]{4}')]),
    //pattern para validar que el dato sea 3 Mayusculas separadas por una - y 3 números
    placa: new FormControl('', [Validators.required,Validators.pattern('[A-Z]{3}[_%+-][0-9]{3}')]),
    color: new FormControl('', [Validators.required]),
  });

  //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {
  }

  //*generando la funcion para crear el nuevo carro
  addCar(){

    //inidicando los campo a ingresar para enviarlos al servicio
    let infoCar = {
      type_vehi:{
        global: this.car.value.global,
        mark: this.car.value.mark,
        model: this.car.value.model,
        placa: this.car.value.placa,
        color: this.car.value.color,
      }
    }
  //traer  token para enviarlo al servicio
    let token = this.usuarioService.traerToken()
    this.usuarioService.addVehicleUser(token, infoCar).subscribe(res => {
      console.log(res)
      //actualizando la informacion del nuevo carro en la vista de mis carros.
      this.emmiter.$emmiterProfile.emit(true)

    })

    //llamar la funcion para cerrar el  modal
    this.dismiss()
    
  }
//cerrando el modal
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  

}

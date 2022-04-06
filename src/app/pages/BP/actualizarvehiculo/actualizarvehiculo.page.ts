/** Proyecto de formación SENA (WAKA)
 Descripción: codigo SCSS de la pagina actualizarvehiculo = formulario crear una nueva cuenta .
 Autor:@SamuelCanoRomero
 Fecha de creación:23/03/2022
 Ultima fecha de modificación:23/03/2022*/

 //?importanto los componenets de angular para su uso, alojado en angular/core
import { Component, OnInit } from '@angular/core';

//?importando componentes para implementar fomularios reactivos alojado en agular/forms

import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

//?importando rutas para su uso alojado en angular/route

import { Router, ActivatedRoute } from '@angular/router';

//?importando la API o servicio usuario alojado en servise/usuario.service

import { UsuarioService } from '../../../services/usuario.service';


import { EmmitersService } from '../../../services/emmiters.service';
import { ModalController } from '@ionic/angular';

//!componentes los cuales conectac y refieren a los distintos archivos de registro

@Component({
  selector: 'app-actualizarvehiculo',
  templateUrl: './actualizarvehiculo.page.html',
  styleUrls: ['./actualizarvehiculo.page.scss'],
})

//**exportando la clase Regsitro y implementando OnInit para el ciclo de vida del mismo */

export class ActualizarvehiculoPage implements OnInit {

  
  vehiculo:any = {}

  mark ={}
  model={}
  color={}
  placa={}
  global={}
  //id

 //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
  //en este caso le estamos pasando como parametro la route anteriormente importada y el servicio
 constructor( private router: Router, 
  private usuarioService : UsuarioService, 
  private emmiter: EmmitersService,
  private activatedRoute:ActivatedRoute,
  private modalController: ModalController) {
    this.getInfoVehId();
 }

  

 
   //generando el formulario mediante formulario reactivo
   info = new FormGroup({
    global: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mark: new FormControl('', [Validators.required, Validators.minLength(4)]),
    model: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4),Validators.pattern('[0-9]{4}')]),
    placa: new FormControl('', [Validators.required,Validators.pattern('[A-Z]{3}[_%+-][0-9]{3}')]),
    color: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }
  
  getInfoVehId(){
    let token = this.usuarioService.traerToken()

    // let id = this.activatedRoute.snapshot.paramMap.get('id')
    // this.id = id

    this.usuarioService.getVehicleId(token).subscribe((res:any) =>{
    
      this.vehiculo = res.data
      this.mark = this.vehiculo.type_vehi.mark
      this.model = this.vehiculo.type_vehi.model
      this.color = this.vehiculo.type_vehi.color
      this.placa = this.vehiculo.type_vehi.placa
      this.global = this.vehiculo.type_vehi.global

      console.log(this.vehiculo);
      
    })
  }
 

  //*generando la funcion para modificar un carro
  actualizarCar(id){

  let token = localStorage.getItem("token")
    this.usuarioService.updateInvehiculo(token, id).subscribe((res:any)=>{
      console.log(res)
      this.emmiter.$emmiterProfile.emit(true)
    })

  this.dismiss()
  
}
  //cerrando el modal
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

 
}

/** Proyecto de formación SENA (WAKA)
 Descripción: codigo SCSS de la pagina actualizarvehiculo = formulario crear una nueva cuenta .
 Autor:@SamuelCanoRomero
 Fecha de creación:23/03/2022
 Ultima fecha de modificación:09/04/2022*/

 //?importanto los componenets de angular para su uso, alojado en angular/core
import { Component, OnInit } from '@angular/core';

//?importando componentes para implementar fomularios reactivos alojado en agular/forms
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

//?importando rutas para su uso alojado en angular/route
import { Router, ActivatedRoute } from '@angular/router';

//?importando la API o servicio usuario alojado en servise/usuario.service
import { UsuarioService } from '../../../services/usuario.service';

//?importando emmiter servicio para actualizar cunado hay cambios alojado en ../../../services/emmiters.service
import { EmmitersService } from '../../../services/emmiters.service';

//?importando alertcontroller para implementar alertas de ionic alojado en  ionic/angular
import { AlertController, IonRouterOutlet, ModalController } from '@ionic/angular';

//?importando la pagina de infovehiculo para porder utilizar la ruta alojado en ../info-vehiculo/info-vehiculo.page
import { InfoVehiculoPage } from '../info-vehiculo/info-vehiculo.page';

//!componentes los cuales conectac y refieren a los distintos archivos de registro
@Component({
  selector: 'app-actualizarvehiculo',
  templateUrl: './actualizarvehiculo.page.html',
  styleUrls: ['./actualizarvehiculo.page.scss'],
})

//**exportando la clase Regsitro y implementando OnInit para el ciclo de vida del mismo */
export class ActualizarvehiculoPage implements OnInit {

//inicializando las variables 
//mensaje de la respuesta que envia el backend para mostrarlo en pnatalla
  mssg

//array para guardar la informacion del vehiculo
  vehiculo:any = {}

//variables para los datos del vehiuclo y mostrarlo en el formulario para su actualizacion
  mark ={}
  model={}
  color={}
  placa={}
  global:number
//id para saber el vehiculo a modificar
id

 //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
  //en este caso le estamos pasando como parametro la route anteriormente importada y el servicio
 constructor( private router: Router, 
  private usuarioService : UsuarioService, 
  private emmiter: EmmitersService,
  private activatedRoute:ActivatedRoute,
  private alertController:AlertController,
  private modalController: ModalController) {

//llamando la funcion para traer la informacion del vehiculo segun id
    this.getInfoVehId();
 }

  

 
   //generando el formulario mediante formulario reactivo
   info = new FormGroup({
    global: new FormControl('', Validators.required),
    mark: new FormControl('', [Validators.required, Validators.minLength(4)]),
    model: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4),Validators.pattern('[0-9]{4}')]),
    placa: new FormControl('', [Validators.required,Validators.pattern('[A-Z]{3}[0-9]{3}')]),
    color: new FormControl('', [Validators.required]),
  });

  //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {
  }

//*funcion para traer la informacion del vehiculo segun id 
  getInfoVehId(){
    //token para enviar al servicio
    let token = this.usuarioService.traerToken()

    //indicando el id y guardarlo en la variable id
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.id = id

    //servicio traer vehiculo donde se le envia id y token
    this.usuarioService.getVehicleId(token,id).subscribe((res:any) =>{
    
      //indicando los valores para mostrarlos en el formulario
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
  actualizarCar(){
  //traer token y guardarlo en la variable token para luego usarla en el servicio
  let token = localStorage.getItem("token")

  //array para guradar toda la informacion del vehiculo que se envio del formulario
  let infoCar = {

    "type_vehi": {
      "global": this.info.value.global,
      "mark": this.info.value.mark,
      "model": this.info.value.model,
      "placa": this.info.value.placa,
      "color": this.info.value.color
    }
  }

  //servicop de actualizar donde se envia un token, id y la informacion del form
    this.usuarioService.updateInvehiculo(token, this.id, infoCar).subscribe((res:any)=>{
      console.log(res)
      //mensaje para mostrar por pantalla cunado se actualizo
      this.mssg = res.msg
      console.log(infoCar)
      this.emmiter.$emmiterProfile.emit(true)
      //dandolo un timepo para que redirecciona a inicoo y abra el modal donde se visualiza mis vehiculo
      setTimeout(() => {
        this.router.navigate(['tabs']) 
        this.presentModal();
      }, 2000);
        
    })

    
    
}
//* modal para abrir y visualizar mis vehiculos
async presentModal() {

  const modal = await this.modalController.create({
    component: InfoVehiculoPage,
    initialBreakpoint: 1,
    breakpoints: [0.0, 0.5, 1],
    showBackdrop: true,
    mode: 'ios'

  });

  await modal.present();
}
 
}

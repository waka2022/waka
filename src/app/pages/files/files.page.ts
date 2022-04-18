import { Component, OnInit } from '@angular/core';


//?importando formularios reactvios de angular alojasdos en angular/core
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

//?importando servicio de usuaurio para su uso alojado en ../../../services/usuario.service
import { UsuarioService } from 'src/app/services/usuario.service';

//?importando el servicio de emmiter para la apikey  alojado en ../../../services/emmiters.service
import { EmmitersService } from 'src/app/services/emmiters.service';

//?importando modal controller para controladores de ionic alojado en ionic/angular
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {

//guarndadno toda la informacion que se trae del usuairo (id)
  usuario:any = {}
  id

  constructor(private usuarioService:UsuarioService, private emmiter: EmmitersService, private modalController: ModalController) { }


 //generando el formulario mediante formulario reactivo
 imgFile= new FormGroup({
  // img: new FormControl('',[Validators.required, Validators.pattern('@"^.*\.(jpg|gif|png|jpeg)$')]),
  img: new FormControl('', Validators.required),
});

//ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
ngOnInit() {

  this.traerInfoUsuario()
  this.emmiter.$emmiterProfile.subscribe(
    resp => this.traerInfoUsuario()
  )
}

//* funciona para traer todos los datos del usaurio 
traerInfoUsuario(){

  let token = localStorage.getItem("token")

  this.usuarioService.getInfo( token ).subscribe((res:any) => {
    this.usuario = res.data
    console.log(res)
    this.id = this.usuario._id;
    console.log (this.id)
  })

}


//*generando la funcion para crear el nuevo carro
addimg(){

//   //inidicando id del usaurio
//   let id = this.id
// console.log(id)
//   //inidicando las o la photo
// let photos = {
//      img: this.imgFile.value.img,
//     }
let num:number = 0
let id = "6259f2c3018641d75cb1bd5e"
let photos = "/home/t470/Documentos/SENA/LogoSENA.png"



let tokenfile = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTlmMmMzMDE4NjQxZDc1Y2IxYmQ1ZSIsImlhdCI6MTY1MDEyNTY1NCwiZXhwIjoxNjUwMTQzNjU0fQ.uP-Zf8bitjqGKyG1bztCBvOqntzVtwbu9gNEiNWCLb4"


  //traer  token para enviarlo al servicio    
 //let tokenfile = this.usuarioService.traerToken()
  this.usuarioService.postFile(num, id, photos, tokenfile).subscribe(res => {
     console.log(res)
      //actualizando la informacion del nuevo carro en la vista de mis carros.    
     this.emmiter.$emmiterProfile.emit(true)
  })
  
//dandolo un timepo para que redirecciona a inicoo y abra el modal donde se visualiza mis vehiculo
setTimeout(() => {
  //llamar la funcion para cerrar el  modal
    this.dismiss()
}, 2000);
}

//cerrando el modal
dismiss() {
  this.modalController.dismiss({
    'dismissed': true
  });
}

 fileimg(e: Event | any){
   console.log(e)
 }

}





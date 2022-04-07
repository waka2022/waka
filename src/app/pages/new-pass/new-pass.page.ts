// Proyecto de formación SENA (WAKA)
// Descripción: codigo TypeSCRIPT  de la pagina CAMBIAR Psw = formulario la clave de la cuenta .
// ?Autor:SamuelCanoRomero
// Fecha de creación:/02/2022
// Ultima fecha de modificación:17/03/2022


//?importando componete de angular alojado en anuglar/core
import { Component, OnInit } from '@angular/core';

//?importando formualario reactivo de angualar alojado en angular/forms
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
//import { PasswordValidator } from '../../validators/password.validator';
//?importando el servicio de usuario para eliminar el usuario alojado en  ./../../services/usuario.service


//?importando controller de alert de ionic alojado en ionic/angular 
import { AlertController } from '@ionic/angular'
import { EmmitersService } from 'src/app/services/emmiters.service';
import { UsuarioService } from 'src/app/services/usuario.service';

//?importando rutas para su uso alojado en angular/route

import { Router, ActivatedRoute } from '@angular/router';

//?importando el servicio de emmiter para el token alojado en  ../../../services/emmiters.service



//!componentes los cuales conectac y refieren a los distintos archivos de newpas
@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.page.html',
  styleUrls: ['./new-pass.page.scss'],
})

//**exportando la clase Regsitro y implementando OnInit para el ciclo de vida del mismo */
export class NewPassPage implements OnInit {

  usuario:any = {}
  mssg :string
  success:boolean

    //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
  constructor(private usuService : UsuarioService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute,
    public alertController: AlertController,
    private emmiter: EmmitersService) {}

    //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {

    this.traerInfoUsuario()
    this.emmiter.$emmiterProfile.subscribe(
      resp => this.traerInfoUsuario()
    )}

    traerInfoUsuario(){

      let token = localStorage.getItem("token")
  
      this.usuService.getInfo( token ).subscribe((res:any) => {
        this.usuario = res.data
  
        console.log(res)
      })
  
    }


  //generando el formulario para realizar validadcion de tipo de dato o si es requerido 
  pass = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')]),
      confirm_password: new FormControl('', Validators.required)
  });

  CambiarPass(){
    let token = localStorage.getItem("token");

          let infopass =  {
            "new_pass": this.pass.value.password,
            "verify_pass": this.pass.value.confirm_password
          }
          

          this.usuService.cambiarContraseña(token, infopass).subscribe(
            (res: any) => {          
              console.log(res)
              console.log(infopass)
              this.mssg = res.msg
          
              //this.router.navigate(['/acceso', this.activatedRoute]);
            }

          )}

}


import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-formulario-bp',
  templateUrl: './formulario-bp.page.html',
  styleUrls: ['./formulario-bp.page.scss'],
})
export class FormularioBPPage implements OnInit {

  //*constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases
    //en este caso estamos mandando como parametro los servicios a implemetnar
  constructor(private router: Router, private usuarioService: UsuarioService) { }

  //generando el formulario mediante formulario reactivo
  info = new FormGroup({
    document: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
    phone: new FormControl('', [Validators.required,Validators.minLength(7), Validators.maxLength(10)]),
    global: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mark: new FormControl('', [Validators.required, Validators.minLength(4)]),
    model: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4),Validators.pattern('[0-9]{4}')]),
    placa: new FormControl('', [Validators.required,Validators.pattern('[A-Z]{3}[_%+-][0-9]{3}')]),
    color: new FormControl('', [Validators.required]),
  });

  //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {

  }

  //*generando la funcion para crear el nuevo carro
  addInfo() {

    //guardando el token
    let token = this.usuarioService.traerToken()

    //inidicando los campo a ingresar referentes al usuario
    let infoAdd = {

      document: this.info.value.document,
      phone: this.info.value.phone,
      
    }

    //inidicando los campo a ingresar referentes al vehiculo
    let infoCar = {

      type_vehi:{
        global: this.info.value.global,
        mark: this.info.value.mark,
        model: this.info.value.model,
        placa: this.info.value.placa,
        color: this.info.value.color,
      }
      

    }
//validando el token y generando el suscribe
    this.usuarioService.addInfoUser(token, infoAdd).subscribe( res => {console.log(res)})
//validando el token y generando el suscribe
    this.usuarioService.addVehicleUser(token,infoCar).subscribe(res => {console.log(res)})

    //redireccionando al incio a la vista mapa
    console.log(infoCar.type_vehi)
    this.router.navigate(['tabs/mapa'])
  }

}

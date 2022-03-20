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

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  info = new FormGroup({
    document: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
    phone: new FormControl('', [Validators.required,Validators.minLength(7), Validators.maxLength(10)]),
    global: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mark: new FormControl('', [Validators.required, Validators.minLength(4)]),
    model: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4),Validators.pattern('[0-9]{4}')]),
    placa: new FormControl('', [Validators.required,Validators.pattern('[A-Z]{3}[_%+-][0-9]{3}')]),
    color: new FormControl('', [Validators.required]),
  });

  ngOnInit() {

  }

  addInfo() {

    let token = this.usuarioService.traerToken()

    let infoAdd = {

      document: this.info.value.document,
      phone: this.info.value.phone,
      
    }

    let infoCar = {

      type_vehi:{
        global: this.info.value.global,
        mark: this.info.value.mark,
        model: this.info.value.model,
        placa: this.info.value.placa,
        color: this.info.value.color,
      }
      

    }

    this.usuarioService.addInfoUser(token, infoAdd).subscribe( res => {console.log(res)})

    this.usuarioService.addVehicleUser(token,infoCar).subscribe(res => {console.log(res)})

    console.log(infoCar.type_vehi)
    this.router.navigate(['tabs/mapa'])
  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-parqueadero',
  templateUrl: './registro-parqueadero.page.html',
  styleUrls: ['./registro-parqueadero.page.scss'],
})
export class RegistroParqueaderoPage implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  info = new FormGroup({
    document: new FormControl('', [Validators.required, Validators.minLength(10)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
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

    let token = this.usuarioService.traerToken()

    let infoAdd = {

      document: this.info.value.document,
      phone: this.info.value.phone,
      parking: true

    }


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

    this.usuarioService.addInfoUser
      (token, infoAdd).subscribe(res => {

        console.log(res)
        this.usuarioService.addParking(token, infoPar).subscribe(res => {
          console.log(res)
        })

      })


    console.log(infoPar)
    this.router.navigate(['tabs2/mis-parqueaderos'])
  }

}

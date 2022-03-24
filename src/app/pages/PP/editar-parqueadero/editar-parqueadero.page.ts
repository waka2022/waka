import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-editar-parqueadero',
  templateUrl: './editar-parqueadero.page.html',
  styleUrls: ['./editar-parqueadero.page.scss'],
})
export class EditarParqueaderoPage implements OnInit {


  parqueadero:any = {}

  camaras:boolean
  vigilante:boolean

  id
  
  constructor(private router: Router, private activatedRoute:ActivatedRoute, private usuarioService:UsuarioService) { 

    this.getparqueadero()

  }

  info = new FormGroup({
    address: new FormControl('', [Validators.required, Validators.minLength(4)]),
    type_parks: new FormControl('', [Validators.required, Validators.minLength(4)]),
    
    cams: new FormControl('',Validators.required),
    vigilant: new FormControl('',Validators.required),
    Carros: new FormControl('false',Validators.required),
    Motos: new FormControl('false',Validators.required),
    Bicicletas: new FormControl('false',Validators.required),
    descript: new FormControl('', [Validators.required, Validators.minLength(4)]),

  });

  ngOnInit() {
  }

  getparqueadero(){
    let token = this.usuarioService.traerToken()

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.id = id

    this.usuarioService.getParkingForId(token,id).subscribe((res:any) =>{
    
     
      this.parqueadero = res.data
      this.camaras = this.parqueadero.type_security.cams
      this.vigilante = this.parqueadero.type_security.vigilant

      console.log(this.parqueadero);
      
      
    })
  }
  


  addInfo() {

    let token = this.usuarioService.traerToken()

    let tipoParq = [];

    if (this.info.value.Carros === true) {

      tipoParq.push('carros');

    } if (this.info.value.Motos === true) {

      tipoParq.push('motos');

    } if (this.info.value.Bicicletas === true) {

      tipoParq.push('bicicletas');

    }

    let infoPar = {

      address: this.info.value.address,
      type_parks: tipoParq,
      type_security: {
        cams: this.info.value.cams,
        vigilant: this.info.value.vigilant
      },
      descript: this.info.value.descript

    }

  
    this.usuarioService.updateParking(token, this.id , infoPar).subscribe(res => {
      console.log(res)
    })

  }

}

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
    document: new FormControl('', [Validators.required, Validators.minLength(10)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  ngOnInit() {

  }

  addInfo() {

    let token = localStorage.getItem("token")

    let infoAdd = {

      document: this.info.value.document,
      phone: this.info.value.document,

    }

    this.usuarioService.addInfoUser(token, infoAdd).subscribe( res => {console.log(res)})

    console.log(this.info)
    //this.router.navigate(['tabs/mapa'])
  }



}

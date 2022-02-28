import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( private router:Router, private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  users = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  saveData(): void{
    console.log(this.users.value);
  }

  Registrarse(){
    this.router.navigate(['seleccionar-rol'])
  }

  crearUsuario(){
    this.usuarioService.crearUsuario(this.users)
  }

}

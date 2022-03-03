import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {

  constructor(private router:Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  users = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  Ingresar(){

    this.usuarioService.signInNormal(this.users.value).subscribe( 
      (res:any) => {
      localStorage.setItem("token", res.data)
      console.log(res.data)
      this.router.navigate(['seleccionar-rol'])
      
    })
  
  }
}

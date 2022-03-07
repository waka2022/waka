import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-actualizarperfil',
  templateUrl: './actualizarperfil.page.html',
  styleUrls: ['./actualizarperfil.page.scss'],
})
export class ActualizarperfilPage implements OnInit {


  usuario = {}

  constructor( private router: Router, private usuService : UsuarioService) { }

  info = new FormGroup({
    names: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  ngOnInit() {
    this.getInfoUser()
  }

  getInfoUser(){
    let token = localStorage.getItem("token")
    this.usuService.getInfo( token ).subscribe((res:any) => {
      this.usuario = res.data
    }) 
  }

  actualizarInfoUser(){
    let token = localStorage.getItem("token")
    this.usuService.updateInfoUser(token, this.info.value).subscribe((res:any)=>{
      console.log(res)
    })
  }
}

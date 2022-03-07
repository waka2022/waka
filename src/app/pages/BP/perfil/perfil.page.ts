import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = {}

  constructor( private usuService : UsuarioService) { }

  ngOnInit() {

    this.traerInfoUsuario()

  }

  traerInfoUsuario(){

    let token = localStorage.getItem("token")

    this.usuService.getInfo( token ).subscribe((res:any) => {
      this.usuario = res.data
    
    })

  }

}

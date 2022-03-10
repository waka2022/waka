import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.page.html',
  styleUrls: ['./error404.page.scss'],
})
export class Error404Page implements OnInit {

  infoUser = {}

  constructor(private usuarioService: UsuarioService) {

    this.getInfo()

  }

  ngOnInit() {
  }

  getInfo(){

    let token = this.usuarioService.traerToken()

    this.usuarioService.getInfo(token).subscribe(
      (res: any) => {
        this.infoUser = res.data
        console.log(this.infoUser)
  })}

}

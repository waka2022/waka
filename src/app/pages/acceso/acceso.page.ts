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

  mssg :string


  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.obteenerinfo()
  }

  obteenerinfo() {
    let token = localStorage.getItem("token")

    this.usuarioService.getInfo(token).subscribe(
      (res: any) => {

        console.log(res.data.document)
        if (res.data.document === undefined || null) {
          this.router.navigate(['seleccionar-rol'])
        }else{
        
          this.router.navigate(['tabs/mapa'])
        }
      })
  }

  users = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]),
    password: new FormControl('', Validators.required)
  });

  Ingresar() {

    this.usuarioService.signInNormal(this.users.value).subscribe(
      (res: any) => {
        localStorage.setItem("token", res.data)

        this.obteenerinfo()

       this.mssg = res.msg
      
      })

  }

}

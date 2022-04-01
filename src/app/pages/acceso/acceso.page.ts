import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService, public toastController: ToastController) { }

  ngOnInit() {
  }

  async msgError(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 3500,
      cssClass: "rojo",
      mode: "ios"
    });
    toast.present();
  }

  async msgBien(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 3500,
      mode: "ios",
      color:"celeste"
    });
    toast.present();
  }

  obteenerinfo() {
    let token = localStorage.getItem("token")

    this.usuarioService.getInfo(token).subscribe(
      (res: any) => {


        if (res.data.document === undefined) {

          this.router.navigate(['seleccionar-rol'])

        } else {

          if (res.data.parking === true) {
            this.router.navigate(['tabs2/mis-parqueaderos'])
          } else {
            this.router.navigate(['tabs/mapa'])
          }
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

        this.msgBien(res.msg)
        

        localStorage.setItem("token", res.data)
        this.obteenerinfo()

      },error => {
        this.msgError(error.error.msg)
      })
  }
}

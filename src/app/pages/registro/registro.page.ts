import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  constructor(private router: Router, private usuarioService: UsuarioService, public toastController: ToastController ) { }

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
      duration: 5500,
      mode: "ios",
      color:"celeste"
    });
    toast.present();
  }


  users = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')]),
    tercond: new FormControl('false',Validators.requiredTrue)
  });



  saveData(): void {

    const user = {
      name: this.users.value.name,
      email:this.users.value.email,
      password: this.users.value.password
    }

    this.usuarioService.crearUsuario(user).subscribe( (res:any) => {
      this.msgBien(res.msg)
      this.router.navigate(['acceso'])
    },error =>{
      this.msgError(error.error.msg)
    })
    
    
  }

  openTerms(){
    console.log("info para terminos y condiciones")
  }

  

}

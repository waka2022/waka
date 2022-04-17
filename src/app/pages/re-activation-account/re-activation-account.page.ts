import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-re-activation-account',
  templateUrl: './re-activation-account.page.html',
  styleUrls: ['./re-activation-account.page.scss'],
})
export class ReActivationAccountPage implements OnInit {


  desabilitado:boolean = true
  inputCorreodesabilitado:boolean = true

  constructor(
    private usuarioService:UsuarioService,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    private route: Router

    ) {}

  ngOnInit() {
  }

  
  async msgError(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 3500,
      cssClass: "rojo",
      mode: "ios",
      position: 'top'
    });
    toast.present();
  }

  async msgBien(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 3500,
      mode: "ios",
      color: "celeste",
      position: 'top'
    });
    toast.present();
  }


  cambios(value){

    if (value === '1') {

      // verificacion de cuenta

      this.desabilitado = false

    }

    if (value === '0') {

      // renovacion de cuenta
      
      this.desabilitado = false
      
    }

    if (value === undefined) {

      
      this.desabilitado = true

    }

  }

  solicitud(value){

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(value);
  
    if (value === '1') {

      // verificacion de cuenta

      this.usuarioService.verificacionCuenta(id).subscribe((res:any)=>{
        console.log(res.msg);

        this.msgBien(res.msg)
        this.route.navigate(['/acceso'])

      },error=>{

        this.msgError(error.error.msg)

      })

    }

    if (value === '0') {
      // reactivacion de cuenta
      
    }
    
  }

  inputCorreo(value, valueSelect){

    if ((value.length >= 4 && valueSelect === '0')||(value.length >= 4 && valueSelect === '1')) {
      this.inputCorreodesabilitado = false
    }else{
      this.inputCorreodesabilitado = true
    }
    
  }

  correo(value,correo){


    console.log(correo);
    

    if (value === '1') {

      // verificacion de cuenta
      this.usuarioService.solicitudEmail(correo, value).subscribe((res:any)=>{
        
        this.msgBien(res.msg)
      })

    }

    if (value === '0') {

      // reactivacionde cuenta
      this.usuarioService.solicitudEmail(correo, value).subscribe((res:any)=>{
     
        this.msgBien(res.msg)
      })
      
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { EmmitersService } from '../../../services/emmiters.service';


@Component({
  selector: 'app-actualizarperfil',
  templateUrl: './actualizarperfil.page.html',
  styleUrls: ['./actualizarperfil.page.scss'],
})
export class ActualizarperfilPage implements OnInit {


  usuario:any = {
    email_t:{
      email:""
    }
  }

  constructor( private router: Router, private usuService : UsuarioService, private emmiter: EmmitersService) {
    this.getInfoUser()
   }

  info = new FormGroup({

    names: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4)]),

  });

  ngOnInit() {
    
  }

  getInfoUser(){
    let token = localStorage.getItem("token")
    this.usuService.getInfo( token ).subscribe((res:any) => {
      this.usuario = res.data

      console.log(res);
      
    }) 
  }


 

  actualizarInfoUser(){

    if (this.info.invalid){
      return Object.values(this.info.controls).forEach(control=>{
        control.markAsTouched();
      })
    }


    let token = localStorage.getItem("token")


    let userInfo = {
      names:this.info.value.names,
      email_t:{
        email:this.info.value.email
      }
    }

    console.log(userInfo);
    
    
    this.usuService.updateInfoUser(token,userInfo).subscribe((res:any)=>{
      console.log(res)
      this.emmiter.$emmiterProfile.emit(true)
      this.router.navigate(['tabs/perfil'])
    })
  }
}

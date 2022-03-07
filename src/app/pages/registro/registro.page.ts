import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  constructor(private router: Router, private usuarioService: UsuarioService ) { }

  ngOnInit() {
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
      last_name: this.users.value.last_name,
      email:this.users.value.email,
      password: this.users.value.password
    }

    this.usuarioService.crearUsuario(user).subscribe( res => {console.log(res)})
    
    this.router.navigate(['acceso'])
  }

  openTerms(){

    console.log("loremmmmmmmmmmmmmmmmmmmmmmmmmm   info para terminos y condiciones")
  }

  

}

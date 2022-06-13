import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router, 
    private usuarioService: UsuarioService, ) { }

  ngOnInit() {

    let token = localStorage.getItem('token')
    
    if (!!token == true) {

      this.usuarioService.getInfo(token).subscribe((res:any)=>{
        console.log(res);

        if (res.role = "USER_BP") {

          this.router.navigate(['tabs/mapa'])
          
        }else{

          this.router.navigate(['tabs2/mis-parqueaderos'])
          
        }
      })
      
    }
  }

}

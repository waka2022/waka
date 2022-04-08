import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.page.html',
  styleUrls: ['./recibo.page.scss'],
})
export class ReciboPage implements OnInit {
  

  reservas:any = []
  id_parqueadero: boolean

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    let par_id = localStorage.getItem('id-parq')

    if (par_id === null) {


      this.id_parqueadero = false

    } else {

      this.id_parqueadero = true
    }

    let token = localStorage.getItem('token')

    this.usuarioService.getAllReservatiosUser(token, true).subscribe((res:any) =>{
      console.log(res);

      this.reservas = res.data
      
    })


  }

 

}

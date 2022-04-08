import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.page.html',
  styleUrls: ['./ver-mas.page.scss'],
})
export class VerMasPage implements OnInit {


  infoUser:any ={
    id_user_res:{
      names:"",
      phone:""
    },
    id_vehicle:{
      type_vehi:{
        mark: "",
        model: 0,
        placa: "",
      }
    }

  }

  id:String

  constructor(private activatedRoute: ActivatedRoute, private usuarioService:UsuarioService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.id = id

    this.getInfoReserva()

  }

  getInfoReserva(){

    let token = localStorage.getItem('token')

    this.usuarioService.getReservationForId(token, this.id).subscribe((res:any) =>{
      console.log(res.data);

      this.infoUser = res.data

    })
  }

}

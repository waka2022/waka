import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.page.html',
  styleUrls: ['./ver-mas.page.scss'],
})
export class VerMasPage implements OnInit {


  infoUser: any = {
    id_user_res: {
      names: "",
      phone: ""
    },
    id_vehicle: {
      type_vehi: {
        mark: "",
        model: 0,
        placa: "",
      }
    },
    parnet: {
      tatus_parnet: Boolean,
      totals: 0
    },
    status: {
      end_park: {
        status: Boolean,
        moment: '0'
      },
      global_status: Boolean,
      on_cancel: Boolean,
      on_park: { 
        moment: '0', 
        status: Boolean }
    }


  }

  id: String

  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService) {

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.id = id

    this.getInfoReserva()
  }

  ngOnInit() {
  }

  getInfoReserva() {

    let token = localStorage.getItem('token')

    this.usuarioService.getReservationForId(token, this.id).subscribe((res: any) => {
      console.log(res.data);

      this.infoUser = res.data

    })
  }

}

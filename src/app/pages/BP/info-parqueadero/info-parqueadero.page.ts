import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-info-parqueadero',
  templateUrl: './info-parqueadero.page.html',
  styleUrls: ['./info-parqueadero.page.scss'],
})
export class InfoParqueaderoPage implements OnInit {

  estado: boolean = false

  duenopar = ""

  infoparqueadero = {
    address: "",
    descript: "",
    price: 0,
    type_parks: [''],
    type_security: {
      cams: false,
      vigilant: false,
    },
    _id:""
  }

  id_parqueadero: boolean

  latparq: string
  lonparq: string

  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private route: Router) {

  }

  ngOnInit() {

    this.traerInformacionParque()

  }

  traerInformacionParque() {

    let token = localStorage.getItem('token')
    let id = this.activatedRoute.snapshot.paramMap.get('id')

    let par_id = localStorage.getItem('id-parq')

    if ( par_id === null && id === "0") {

      //console.log("no hay parqueadero");

      this.id_parqueadero = false
      
    } else {
      
      this.id_parqueadero = true
      //console.log("si hay parqueadero");

      if (par_id === null) {

        this.usuarioService.getInfo(token).subscribe((res: any) => {
          this.duenopar = res.data.names
        })
  
        this.usuarioService.getParkingForId(token, id).subscribe((res: any) => {
    
          //console.log(res.data);
          this.infoparqueadero = res.data
          this.latparq = res.data.ubi.lat
          this.lonparq = res.data.ubi.lon
    
        })
        
      }else{

        this.usuarioService.getInfo(token).subscribe((res: any) => {
          this.duenopar = res.data.names
        })
  
        this.usuarioService.getParkingForId(token, par_id).subscribe((res: any) => {
    
          //console.log(res.data);
          this.infoparqueadero = res.data
          this.latparq = res.data.ubi.lat
          this.lonparq = res.data.ubi.lon
    
        })

      }

      

    }

  }

  cambiarEstado() {


    localStorage.setItem('lat-parq', this.latparq)
    localStorage.setItem('lon-parq', this.lonparq)

    localStorage.setItem('id-parq', this.infoparqueadero._id)

    this.estado = !this.estado;

    this.route.navigate(['tabs/mapa'])
  }

}

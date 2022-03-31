import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { WakaFileService } from '../../../services/waka-file.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-agregar-foto',
  templateUrl: './agregar-foto.page.html',
  styleUrls: ['./agregar-foto.page.scss'],
})
export class AgregarFotoPage implements OnInit {

  constructor(private usuarioService: WakaFileService, private modalController:
  ModalController,) { }

  new_auto = new FormGroup({
    
    photo: new FormControl('', ),
    description: new FormControl('', )
  
  });

  ngOnInit() {
  }

  addPhoto(){

  let novVehiculo = {
    descript: this.new_auto.value.descript
  }

    let token = this.usuarioService.traerToken()
    this.usuarioService.addNovPhotos(token, novVehiculo).subscribe(res => {
      console.log(res)
    })

    
  }

}

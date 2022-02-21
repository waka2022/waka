import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acceso-estadisticas',
  templateUrl: './acceso-estadisticas.page.html',
  styleUrls: ['./acceso-estadisticas.page.scss'],
})
export class AccesoEstadisticasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user_due = new FormGroup({
    
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  
  });

}

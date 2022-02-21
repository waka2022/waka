import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novedades-auto',
  templateUrl: './novedades-auto.component.html',
  styleUrls: ['./novedades-auto.component.scss'],
})
export class NovedadesAutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  new_auto = new FormGroup({
    
    img: new FormControl('', ),
    des: new FormControl('', )
  
  });

}

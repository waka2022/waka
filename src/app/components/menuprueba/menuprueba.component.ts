import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menuprueba',
  templateUrl: './menuprueba.component.html',
  styleUrls: ['./menuprueba.component.scss'],
})
export class MenupruebaComponent implements OnInit {

  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  ngOnInit() {}

}

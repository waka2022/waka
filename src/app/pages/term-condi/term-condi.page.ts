import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-term-condi',
  templateUrl: './term-condi.page.html',
  styleUrls: ['./term-condi.page.scss'],
})
export class TermCondiPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}

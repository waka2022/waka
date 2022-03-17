import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
//import { PasswordValidator } from '../../validators/password.validator';


@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.page.html',
  styleUrls: ['./new-pass.page.scss'],
})
export class NewPassPage implements OnInit {

  constructor() {}

  ngOnInit() {}

  pass = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')]),
      confirm_password: new FormControl('', Validators.required)
  });

}


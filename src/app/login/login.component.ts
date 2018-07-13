import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  constructor() { }
  ngOnInit() {
  }
  getErrorMessage(inputType) {

    if (inputType == 'email') {
      return this.email.hasError('required') ? 'You must enter an email' :
        this.email.hasError('email') ? 'Not a valid email' :
          '';
    } else if (inputType == 'password') {
      console.log("passsord: " + this.password.value);
      return this.password.hasError('required') ? 'You must enter a password' : '';
    }
  }
}

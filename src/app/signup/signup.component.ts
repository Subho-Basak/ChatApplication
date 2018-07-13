import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hide = true;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  focusNext(event):void{
    const allOtpInputs = [].slice.call(document.querySelectorAll(".otp input"), 0);
    const currentIndex = allOtpInputs.indexOf(event.target);
    if(event.target.value != "" ){
      const nextInput =  allOtpInputs[currentIndex + (currentIndex < allOtpInputs.length?1:0)];
      nextInput.focus();
    }else if(event.keyCode === 8 ){
      const prevInput =  allOtpInputs[currentIndex - (currentIndex > 0 ? 1:0)];
      prevInput.focus();
    }
  }
}

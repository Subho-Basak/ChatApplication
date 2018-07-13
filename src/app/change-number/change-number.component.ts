import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SnackbarServiceService } from '../_services/snackbar-service.service';
import { AppConfig } from '../_config/app.config';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  constructor(private snackBarService: SnackbarServiceService) { }
  phone = new FormControl('', [Validators.required]);

  getErrorMessage() {
      return this.phone.hasError('required') ? 'This field is required' : '';
  }
  ngOnInit() {
  }
  saveNumber():void{
    this.snackBarService.openSnackBar(AppConfig.snackBarProperties.snackBarMessage.CONTACT_UPDATED);
  }
}

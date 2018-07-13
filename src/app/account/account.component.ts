import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SnackbarServiceService } from '../_services/snackbar-service.service';
import { AppConfig } from '../_config/app.config';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private snackBarService: SnackbarServiceService) { }
  userName = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  getErrorMessage(field) {
    if (field == 'userName')
      return this.userName.hasError('required') ? 'This field is required' : '';
    else if (field == 'status')
      return this.status.hasError('required') ? 'This field is required' : '';
  }
  ngOnInit() {
  }
  updateProfile(): void {
    this.snackBarService.openSnackBar(AppConfig.snackBarProperties.snackBarMessage.PROFILE_UPDATED);
  }
}

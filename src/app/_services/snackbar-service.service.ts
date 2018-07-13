import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { AppConfig } from '../_config/app.config';

@Injectable({
  providedIn: 'root'
})
export class SnackbarServiceService {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    let action = "Close";
    this.snackBar.open(message, action, {
      duration: AppConfig.snackBarProperties.snackBarDuration,
    });
  }
}

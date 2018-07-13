import { Component, OnInit } from '@angular/core';
import {SnackbarServiceService } from '../_services/snackbar-service.service';
import { AppConfig } from '../_config/app.config';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.css']
})
export class ChatInfoComponent implements OnInit {
  isContactBlocked:boolean;

  constructor(private snackbarService:SnackbarServiceService) { }

  ngOnInit() {
  }

  blockContact():void{
    this.isContactBlocked = true;
    this.snackbarService.openSnackBar(AppConfig.snackBarProperties.snackBarMessage.CONTACT_BLOCKED);
  }
}

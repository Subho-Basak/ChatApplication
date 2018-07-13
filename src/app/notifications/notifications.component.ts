import { Component, OnInit } from '@angular/core';
import { SnackbarServiceService } from '../_services/snackbar-service.service';
import { AppConfig } from '../_config/app.config';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationState: boolean;
  constructor(private snackBarService: SnackbarServiceService) { }

  ngOnInit() {
  }
  changeNotification(): void {
    if (this.notificationState)
      this.snackBarService.openSnackBar(AppConfig.snackBarProperties.snackBarMessage.NOTIFICATION_TURNED_ON);
    else
      this.snackBarService.openSnackBar(AppConfig.snackBarProperties.snackBarMessage.NOTIFICATION_TURNED_OFF);
  }
  onChange(event): void {
    this.notificationState = event.checked;
  }
}

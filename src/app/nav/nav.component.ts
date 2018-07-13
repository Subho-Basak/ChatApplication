import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppConfig } from '../_config/app.config';
import { AccountComponent } from '../account/account.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { DeleteAccountComponent } from '../delete-account/delete-account.component';
import { ChangeNumberComponent } from '../change-number/change-number.component';
import {ChatInfoComponent} from '../chat-info/chat-info.component';
@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(AccountComponent, {
      width: "500px"
    });
  }
  openNotificationDialog():void{
    let dialogRef = this.dialog.open(NotificationsComponent, {
      width: AppConfig.modalProperties.width
    });
  }
  openDeleteAccountDialog():void{
    let dialogRef = this.dialog.open(DeleteAccountComponent, {
      width: AppConfig.modalProperties.width
    });
  }
  openChangeNumberDialog():void{
    let dialogRef = this.dialog.open(ChangeNumberComponent, {
      width: AppConfig.modalProperties.width
    });
  }
  openChatInfoDialog():void{
    let dialogRef = this.dialog.open(ChatInfoComponent, {
      width: AppConfig.modalProperties.width
    });
  }
}

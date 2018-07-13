import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatBadgeModule,
  MatMenuModule,
  MatGridListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatStepperModule
} from '@angular/material';

import { ChatComponent } from './chat/chat.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ChangeNumberComponent } from './change-number/change-number.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ChatInfoComponent } from './chat-info/chat-info.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: NavComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChatComponent,
    AccountComponent,
    NotificationsComponent,
    DeleteAccountComponent,
    ChangeNumberComponent,
    SignupComponent,
    LoginComponent,
    ChatInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatMenuModule,
    MatGridListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    AccountComponent,
    NotificationsComponent,
    DeleteAccountComponent,
    ChangeNumberComponent,
    ChatInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

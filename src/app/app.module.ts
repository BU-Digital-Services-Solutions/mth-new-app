import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './Shared/modules/material/material.module';
import { LoginComponent } from './Core/login/login.component';
import { ForgotPasswordComponent } from './Core/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Core/reset-password/reset-password.component';
import { PasswordResetSuccessfulComponent } from './Core/password-reset-successful/password-reset-successful.component';
import { RegisterComponent } from './Core/register/register.component';
import { CheckYourEmailComponent } from './Core/check-your-email/check-your-email.component';
import { HomeComponent } from './Core/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadderComponent } from './Layout/headder/headder.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PasswordResetSuccessfulComponent,
    RegisterComponent,
    CheckYourEmailComponent,
    HomeComponent,
    HeadderComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

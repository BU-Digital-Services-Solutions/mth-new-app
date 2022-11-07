import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckYourEmailComponent } from './Core/check-your-email/check-your-email.component';
import { ForgotPasswordComponent } from './Core/forgot-password/forgot-password.component';
import { HomeComponent } from './Core/home/home.component';
import { LoginComponent } from './Core/login/login.component';
import { PasswordResetSuccessfulComponent } from './Core/password-reset-successful/password-reset-successful.component';
import { RegisterComponent } from './Core/register/register.component';
import { ResetPasswordComponent } from './Core/reset-password/reset-password.component';

const routes: Routes = [
  {path :'home', component: HomeComponent},
  {path :'login', component: LoginComponent,
  children:[
    {path :'forgot-password', component: ForgotPasswordComponent},
        {path :'forgot-password', component: ForgotPasswordComponent}

  ]

},
  {path :'register', component: RegisterComponent},
  {path :'reset-password', component: ResetPasswordComponent},
  {path :'password-reset-successful', component: PasswordResetSuccessfulComponent},
  {path :'check-your-email', component:CheckYourEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

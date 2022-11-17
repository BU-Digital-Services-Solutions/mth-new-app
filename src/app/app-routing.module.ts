import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CheckYourEmailComponent } from './Core/check-your-email/check-your-email.component';
import { ForgotPasswordComponent } from './Core/forgot-password/forgot-password.component';
import { HomeCarouselComponent } from './Core/home/home-carousel/home-carousel.component';
import { HomeComponent } from './Core/home/home.component';
import { LoginComponent } from './Core/login/login.component';
import { PageNotFoundComponent } from './Core/page-not-found/page-not-found.component';
import { PasswordResetSuccessfulComponent } from './Core/password-reset-successful/password-reset-successful.component';
import { RegisterComponent } from './Core/register/register.component';
import { ResetPasswordComponent } from './Core/reset-password/reset-password.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path :'', component:HomeCarouselComponent},
  {path :'register', component: RegisterComponent},
  {path :'login', component: LoginComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path :'reset-password', component: ResetPasswordComponent},
  {path :'password-reset-successful', component: PasswordResetSuccessfulComponent},
  {path :'check-your-email', component:CheckYourEmailComponent},
  {path:'', component:DashboardComponent},
  {path:'layout', component:LayoutComponent}
  //  {path :'**' , component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { changePasswordComponent } from './changePassword/changePassword.component';
import { LogoutComponent } from './logout/logout.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'verify', component: VerifyComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'changePassword', component: changePasswordComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

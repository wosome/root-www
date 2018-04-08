import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent, RegisterComponent, LoginComponent, RecoverComponent],
  exports: [AuthComponent]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployerComponent, EmployerLoginComponent]
})
export class EmployerModule { }

import { Routes, RouterModule } from '@angular/router';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: "", redirectTo: "login" },
  { path: "login", component: JobseekerLoginComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class JobseekerRouting{
}

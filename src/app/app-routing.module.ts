import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  {
    path: 'recruiter',
    loadChildren: () =>
      import('../app/pages/recruiter/recruiter.module').then(
        m => m.RecruiterModule
      ),
  },
  {
    path: 'jobseeker',
    loadChildren: () =>
      import('../app/pages/jobseeker/jobseeker.module').then(
        m => m.JobseekerModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RecruiterAnalyticsComponent } from './pages/recruiter/recruiter-analytics/recruiter-analytics.component';
import { RecruiterAssignmentComponent } from './pages/recruiter/recruiter-assignment/recruiter-assignment.component';
import { RecruiterCandidatesComponent } from './pages/recruiter/recruiter-candidates/recruiter-candidates.component';
import { RecruiterClientsComponent } from './pages/recruiter/recruiter-clients/recruiter-clients.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  {
    path: 'recruiter',
    loadChildren: () =>
      import('../app/pages/recruiter/recruiter.module').then(
        m => m.RecruiterModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

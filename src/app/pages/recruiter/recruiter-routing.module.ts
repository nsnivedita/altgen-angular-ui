import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecruiterComponent } from "./recruiter.component";
import { RecruiterLoginComponent } from "./recruiter-login/recruiter-login.component";
import { RecruiterAnalyticsComponent } from "./recruiter-analytics/recruiter-analytics.component";
import { RecruiterAssignmentComponent } from "./recruiter-assignment/recruiter-assignment.component";
import { RecruiterCandidatesComponent } from "./recruiter-candidates/recruiter-candidates.component";
import { RecruiterClientsComponent } from "./recruiter-clients/recruiter-clients.component";

const routes: Routes = [
  { path: "", redirectTo: "login" },
  { path: "login", component: RecruiterLoginComponent },
  {
    path: "clients",
    component: RecruiterComponent,

    children: [
      { path: "", component: RecruiterClientsComponent },
    ],
  },
  {
    path: "analytics",
    component: RecruiterComponent,

    children: [
      { path: "", component: RecruiterAnalyticsComponent },
    ]
  },
  {
    path: "assignments",
    component: RecruiterComponent,

    children: [
      { path: "", component: RecruiterAssignmentComponent },
    ]
  },
  {
    path: "candidates",
    component: RecruiterComponent,

    children: [
      { path: "", component: RecruiterCandidatesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule {}

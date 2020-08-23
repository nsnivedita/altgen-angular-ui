import { RecruiterClientsComponent } from "./recruiter-clients/recruiter-clients.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { R } from "@angular/router";
import { RecruiterComponent } from "./recruiter.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouteRoutingModule } from "./recruiter-routing.module";
import { RecruiterLoginComponent } from "./recruiter-login/recruiter-login.component";

import { RecruiterAssignmentComponent } from './recruiter-assignment/recruiter-assignment.component';

@NgModule({
  imports: [
    RouteRoutingModule,
    SharedModule,
    CommonModule,
   
  ],
  declarations: [
    RecruiterComponent,
    RecruiterLoginComponent,
    RecruiterClientsComponent,
    RecruiterAssignmentComponent
  ],
  exports: [],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecruiterModule {}

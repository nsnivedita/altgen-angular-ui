import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobseekerComponent } from './jobseeker.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { RouteRoutingModule } from '../recruiter/recruiter-routing.module';
import { JobseekerRouting } from './jobseeker-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    //RouteRoutingModule,
    JobseekerRouting,
    CarouselModule
  ],
  declarations: [JobseekerComponent, JobseekerLoginComponent]
})
export class JobseekerModule { }

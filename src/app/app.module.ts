import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-owl-carousel-o";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { FakeService } from './fake-data/fake.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [BrowserModule,SharedModule, AppRoutingModule, CarouselModule,BrowserAnimationsModule,RouterModule, HttpClientModule ],
  providers: [FakeService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

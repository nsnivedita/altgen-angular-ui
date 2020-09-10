import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 4,
      },
      740: {
        items: 8,
      },
      940: {
        items: 8,
      },
      1200: {
        items: 8,
      },
    },
    nav: true,
  };
  slide = [
    { image: "assets/images/companies-logo/logo1.png", id: 1, alt: "logo1" },
    { image: "assets/images/companies-logo/logo2.png", id: 2, alt: "logo1" },
    { image: "assets/images/companies-logo/logo3.png", id: 3, alt: "logo1" },
    { image: "assets/images/companies-logo/logo4.png", id: 5, alt: "logo1" },
    { image: "assets/images/companies-logo/logo5.png", id: 6, alt: "logo1" },
    { image: "assets/images/companies-logo/logo6.png", id: 7, alt: "logo1" },
    { image: "assets/images/companies-logo/logo7.png", id: 8, alt: "logo1" },
    { image: "assets/images/companies-logo/logo8.jpg", id: 9, alt: "logo1" },
    { image: "assets/images/companies-logo/logo9.png", id: 10, alt: "logo1" },
    { image: "assets/images/companies-logo/logo10.jpeg", id: 4, alt: "logo1" },
  ];

  activeSlides: SlidesOutputData;

  slidesStore: any[];
  constructor() { }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  ngOnInit(): void {
  }

}

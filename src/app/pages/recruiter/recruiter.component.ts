import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recruiter",
  templateUrl: "./recruiter.component.html",
  styleUrls: ["./recruiter.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class RecruiterComponent implements OnInit {
 constructor(private router: Router, private route: ActivatedRoute) {}
  items = [];
  activeItem: any;

  // activeItem: MenuItem;



  ngOnInit() {
    this.activeItem = this.route.snapshot.routeConfig.path;
    console.log(this.activeItem);
    this.items = [
      { label: "analytics", routerLink: "../analytics" },
      { label: "clients", routerLink: "../clients" },
      { label: "assignments", routerLink: "../assignments" },
      { label: "candidates", routerLink: "../candidates" },
    ];
    // this.activeItem = this.items[1];
  }
}

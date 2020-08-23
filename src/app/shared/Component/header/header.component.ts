import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  recruiterActive = false;
  jobseekerActive = false;
  active: string;

  ngOnInit(): void {
    // console.log(this.route)
    this.active = localStorage.getItem("activeModule");
  }

  moveToRecruiter() {
    localStorage.clear();
    localStorage.setItem("activeModule", "Recruiter");
    this.router.navigateByUrl("recruiter/login");
  }
  moveToJobseeker() {
    localStorage.clear();
    localStorage.setItem("activeModule", "Jobseeker");
    this.router.navigateByUrl("jobseeker/login");
  }

  moveToHome() {
    localStorage.clear();
    this.router.navigateByUrl("home");
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  recruiterActive = false;
  active: string;

  ngOnInit(): void {
    // console.log(this.route)
    this.active = localStorage.getItem('activeModule');
  }

  moveToRecruiter() {
    localStorage.setItem('activeModule', 'Recruiter');
    this.router.navigateByUrl('recruiter/login');
  }

  moveToHome(){
    localStorage.clear()
    this.router.navigateByUrl('home');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.scss']
})
export class JobseekerLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

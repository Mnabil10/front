import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavsideComponent } from '../navside/navside.component';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

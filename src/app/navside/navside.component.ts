import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.css']
})
export class NavsideComponent implements OnInit {

  constructor(public auth:AuthService, private router:  Router,) { }

  ngOnInit(): void {
  }
  signOut() {
    this.auth.LogOut()
    this.router.navigate(['/login']);
  }
}

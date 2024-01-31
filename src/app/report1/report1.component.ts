import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showDiv = false;
  value = false;
  image ='../../assets/image/0.png';
  onCheckboxChange() {
    this.value = !this.value;
    if (this.value) {
      this.image = '../../assets/image/0bv.png';
    } else {
      this.image = '../../assets/image/0bv.png';
    }
  }

  toggleImage() {
    this.value = !this.value;
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // menuItems = [
  //   {
  //     title: '[GitHub](poe://www.poe.com/_api/key_phrase?phrase=GitHub&prompt=Tell%20me%20more%20about%20GitHub.)',
  //     icon: 'fa fa-github',
  //     href: {
  //       url: 'http://github.com',
  //       blank: true
  //     }
  //   },
  //   {
  //     title: '[GitLab](poe://www.poe.com/_api/key_phrase?phrase=GitLab&prompt=Tell%20me%20more%20about%20GitLab.)',
  //     icon: ['fa fa-gitlab', '#4078c0'],
  //   },
  //   {
  //     title: 'subMenu',
  //     icon: 'my-icon icon1',
  //     menus: [
  //       {
  //         title: 'subMenu1',
  //         icon: 'fa fa-firefox'
  //       },
  //       {
  //         title: 'subMenu2',
  //         icon: 'fa fa-file'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'subMenu',
  //     icon: 'my-icon icon2'
  //   },
  //   {
  //     title: 'click',
  //     icon: 'my-icon icon3'
  //   },
  //   {
  //     title: 'hash-href',
  //     href: '#someHash'
  //   },
  //   {
  //     title: 'clickMe!',
  //     click: () => {
  //       alert('click event callback');
  //     }
  //   },
  //   {
  //     disabled: true,
  //     title: 'disabled'
  //   }
  // ];
}


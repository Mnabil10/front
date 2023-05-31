import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public Translate: TranslateService) {
    Translate.addLangs(['en','fr']);
    Translate.setDefaultLang('en');
   }
   switchLanguage(lang:string){
    this.Translate.use(lang);
   }
  ngOnInit(): void {
  }

}

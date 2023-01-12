import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-vtt',
  templateUrl: './vtt.component.html',
  styleUrls: ['./vtt.component.css']
})
export class VTTComponent implements OnInit {
User : any;
  constructor(public Translate: TranslateService, public auth:AuthService, private router:  Router) {
    Translate.addLangs(['en','fr']);
    Translate.setDefaultLang('en');
   }
   switchLanguage(lang:string){
    this.Translate.use(lang);
   }

  ngOnInit(): void {
  }
  signOut() {
    this.auth.LogOut()
    this.router.navigate(['/login']);
  }
  getUser(){
    return this.User = this.auth.getUser()


 }


 OnClick() {
  console.log(window.location.href)
  window.location.href = "shorturl.at/sDGW0"
}

}

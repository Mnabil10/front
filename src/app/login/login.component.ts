import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:  Router, private token:TokenService, private AuthService:AuthService,public Translate: TranslateService) {
    Translate.addLangs(['en','fr']);
    Translate.setDefaultLang('en');
  }
  switchLanguage(lang:string){
    this.Translate.use(lang);
   }
  authData:any;
  loginErrorMsg:string="false";
  ngOnInit(): void {
    if(this.token.GetToken()){
      this.router.navigate(['/']);
    }
  }
  loginFormValidation = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })
  Login() {
    if (this.loginFormValidation.valid) {
      this.loginErrorMsg='false';
      this.AuthService.Login(this.loginFormValidation).subscribe(data =>{
        this.authData= data
        this.token.CreateToken(this.authData.token);
        this.AuthService.getUser();
        this.router.navigate(['/']);
      }, resError =>{
        this.loginErrorMsg=resError.error.message;
      })
      this.loginFormValidation.reset();
    } else {

    }
  }
}

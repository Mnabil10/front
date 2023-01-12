import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(public Translate: TranslateService,private AuthService:AuthService,private token:TokenService , private router:  Router) {
    Translate.addLangs(['en','fr']);
    Translate.setDefaultLang('en');
   }
   switchLanguage(lang:string){
    this.Translate.use(lang);
   }
   authData:any;
   signupErrorMsg:string="false";
   ngOnInit(): void {
    if(this.token.GetToken()){
      this.router.navigate(['/login']);
    }
  }
  regFormValidation = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })
  SignUp() {
    if (this.regFormValidation.valid) {
      this.signupErrorMsg='false';
      this.AuthService.SignUP(this.regFormValidation).subscribe(data =>{
        this.authData= data
        this.token.CreateToken(this.authData.token);
        this.AuthService.getUser();
        this.router.navigate(['/login']);
      }, resError =>{
        this.signupErrorMsg=resError.error.errors.email[0];
      })
      this.regFormValidation.reset();
    } else {

    }
  }
}

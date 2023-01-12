import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token:TokenService) { }
  baseUrl = 'http://localhost:8000/api/';
  user:any

  Login(formInput: FormGroup) {
    return this.http.post(this.baseUrl + "auth/login", formInput.value, {
      headers: new HttpHeaders({
        "Accept": "application/json"
      }),
    })
  }

  SignUP(formInput: FormGroup) {
    return this.http.post(this.baseUrl + "auth/register", formInput.value)
  }

  isLoggedin(){
      return this.token.GetToken()?true:false;
  }

  LogOut() {
    this.token.RemoveToken();
    this.getUser()
  }

  getUser(){
    return this.http.get(this.baseUrl + 'user').subscribe((res) => {
      this.user = res;
    });
  }

  getUserId(){
    return this.user
  }

  autoLogin(){
    return this.http.get(this.baseUrl + 'user',{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token.GetToken()}`
      }),
    }).subscribe((res)=>{
      this.setUser(res);
  })
  }

  setUser(user:any){
    this.user=user
  }


}


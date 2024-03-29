import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://10.10.99.13:3000/api/v1/data/';

  submit(formInput: FormGroup){
    console.log(formInput.value)
    const data = new FormData()
    data.append("ContainerID", formInput.value.ContainerID)

    data.append("trip-start", formInput.value["trip-start"])
    data.append("trip-end", formInput.value["trip-end"])

    return this.http.post(this.baseUrl + "byContainerId", data)
  }


//   public submit(test:any): Observable<any> {
//     const url = 'http://localhost:8081/submit';
//     return this.http.post<any>(url,test);
//   }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rep-dest',
  templateUrl: './rep-dest.component.html',
  styleUrls: ['./rep-dest.component.css']
})
export class RepDestComponent implements OnInit {
  response: any;

  data: any;
  remIp: any;
  startdate: any;
  enddate: any;
  constructor(private http:HttpClient,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      remIp: [''],
      startdate: [''],
      enddate: ['']

    });
  }
  addForm = new FormGroup({
    "remIp": new FormControl('', [Validators.required]),
    "startdate": new FormControl('', [Validators.required]),
    "enddate": new FormControl('', [Validators.required]),

  });
  getData(param1: any, param2: any,param3:any) {
    const params = { startDate: param1, endDate: param2, remIp:param3 };
    this.http.get('http://10.10.99.13:3000/api/v1/data/byRemIp/', { params: params })
      .subscribe((response) => {
        this.data = response;
        console.log(this.data);
      }, (error) => {
        console.error(error);
      });
  }
}

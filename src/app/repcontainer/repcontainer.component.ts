import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-repcontainer',
  templateUrl: './repcontainer.component.html',
  styleUrls: ['./repcontainer.component.css']
})
export class RepcontainerComponent implements OnInit {

      response: any;

      data: any;
      container: any;
      startdate: any;
      enddate: any;
  constructor(private http:HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      container: [''],
      startdate: [''],
      enddate: ['']

    });
  }
  addForm = new FormGroup({
    "container": new FormControl('', [Validators.required]),
    "startdate": new FormControl('', [Validators.required]),
    "enddate": new FormControl('', [Validators.required]),

  });
  // submit(){

  //   this.model.submit(this.addForm).subscribe(data =>{
  //     console.log("Submit function")
  //     this.data= data;
  //     console.log(this.data.Model);
  //   })
  // }
  getData(param1: any, param2: any,param3:any) {
    const params = { startDate: param1, endDate: param2, containerId:param3 };
    this.http.get('http://10.10.99.13:3000/api/v1/data/byContainerId/', { params: params })
      .subscribe((response) => {
        this.data = response;
        console.log(this.data);
      }, (error) => {
        console.error(error);
      });
  }
}

import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelService } from '../model.service';
import { TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
})
export class SecurityComponent implements OnInit {
  // videoItems = [
  //   {
  //     name: 'Before',
  //     src: '../../assets/image/Video.mp4',
  //     type: 'video/mp4'
  //   },
  //   {
  //     name: 'After',
  //     src: '../../assets/image/truck.mp4',
  //     type: 'video/mp4'
  //   },

  // ];
  // activeIndex = 0;
  // currentVideo = this.videoItems[this.activeIndex];
  data: any;
  test:any;

  constructor(public Translate: TranslateService,public auth:AuthService, private router:  Router,public model:ModelService ) {
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
  addForm = new FormGroup({
    "ContainerID": new FormControl('', [Validators.required]),
    "trip-start": new FormControl('', [Validators.required]),
    "trip-end": new FormControl('', [Validators.required]),
    "modelType": new FormControl('', [Validators.required]),
  });
  submit(){

    this.model.submit(this.addForm).subscribe(data =>{
      console.log("Submit function")
      this.data= data;
      console.log(this.data.Model);
    })
  }
//   submit() {
//     this.test = this.addForm.value;
//     this.model.submit(this.test).subscribe((response: any) => {
//       console.log(response);
//     });
// }

  // videoPlayerInit(data: any) {
  //   this.data = data;
  //   this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
  //   this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  // }
  // nextVideo() {
  //   this.activeIndex++;
  //   if (this.activeIndex === this.videoItems.length) {
  //     this.activeIndex = 0;
  //   }
  //   this.currentVideo = this.videoItems[this.activeIndex];
  // }
  // initVdo() {
  //   this.data.play();
  // }
  // startPlaylistVdo(item: any, index: number) {
  //   this.activeIndex = index;
  //   this.currentVideo = item;
  // }

}

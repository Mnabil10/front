import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  videoItems = [
    {
      name: 'Before',
      src: '../../assets/image/Video.mp4',
      type: 'video/mp4'
    },
    {
      name: 'After',
      src: '../../assets/image/truck.mp4',
      type: 'video/mp4'
    },

  ];
  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data: any;

  constructor(public Translate: TranslateService,public auth:AuthService, private router:  Router) {
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
  videoPlayerInit(data: any) {
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  nextVideo() {
    this.activeIndex++;
    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }
    this.currentVideo = this.videoItems[this.activeIndex];
  }
  initVdo() {
    this.data.play();
  }
  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }
}

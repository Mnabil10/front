import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SecurityComponent } from './security/security.component';
import { VTTComponent } from './vtt/vtt.component';
import { CompanyComponent } from './company/company.component';
import { ContainerComponent } from './container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './chat/chat.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {AngularBotModule} from './angular-bot/angular-bot.module';
import { CommonModule } from '@angular/common';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportComponent } from './report/report.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavsideComponent } from './navside/navside.component';
import { RepcontainerComponent } from './repcontainer/repcontainer.component';
import { RepcompnyComponent } from './repcompny/repcompny.component';
import { RepSourceComponent } from './rep-source/rep-source.component';
import { RepUserComponent } from './rep-user/rep-user.component';
import { RepDestComponent } from './rep-dest/rep-dest.component';
import { HomeComponent } from './home/home.component';
import { Report1Component } from './report1/report1.component';
import { Cam1Component } from './cam1/cam1.component';
import { Cam2Component } from './cam2/cam2.component';
import { Cam3Component } from './cam3/cam3.component';
import { Cam4Component } from './cam4/cam4.component';
import { VideonavComponent } from './videonav/videonav.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SecurityComponent,
    VTTComponent,
    CompanyComponent,
    ContainerComponent,
    ErrorComponent,
    FooterComponent,
    ChatComponent,
    NavbarComponent,
    ReportComponent,
    DashbordComponent,
    NavsideComponent,
    RepcontainerComponent,
    RepcompnyComponent,
    RepSourceComponent,
    RepUserComponent,
    RepDestComponent,
    HomeComponent,
    Report1Component,Cam1Component,Cam2Component,Cam3Component,Cam4Component,VideonavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: httpTranslateLoader,
        deps:[HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AngularBotModule,
    CommonModule,
    NgxCsvParserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http);
}

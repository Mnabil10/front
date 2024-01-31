import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CompanyComponent } from './company/company.component';
import { ContainerComponent } from './container/container.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RepDestComponent } from './rep-dest/rep-dest.component';
import { RepSourceComponent } from './rep-source/rep-source.component';
import { RepUserComponent } from './rep-user/rep-user.component';
import { RepcompnyComponent } from './repcompny/repcompny.component';
import { RepcontainerComponent } from './repcontainer/repcontainer.component';
import { ReportComponent } from './report/report.component';
import { SecurityComponent } from './security/security.component';
import { VTTComponent } from './vtt/vtt.component';
import { HomeComponent } from './home/home.component';
import { Cam1Component } from './cam1/cam1.component';
import { Cam2Component } from './cam2/cam2.component';
import { Cam3Component } from './cam3/cam3.component';
import { Cam4Component } from './cam4/cam4.component';

const routes: Routes = [
   { path: '', component: HomeComponent, },
   { path: 'dashboard', component: DashbordComponent, },
   {path: 'report', component:ReportComponent,},
   { path: 'repContainer', component: RepcontainerComponent, },
   { path: 'repDestination', component: RepDestComponent, },
   { path: 'repSource', component: RepSourceComponent, },
   { path: 'repUsername', component: RepUserComponent, },
   { path: 'repCompany', component: RepcompnyComponent, },
   { path: 'cam1', component: Cam1Component, },
   { path: 'cam2', component: Cam2Component, },
   { path: 'cam3', component: Cam3Component, },
   { path: 'cam4', component: Cam4Component, },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'check', component: SecurityComponent, canActivate: [AuthGuardService] },
  // { path: 'http', component: VTTComponent, canActivate: [AuthGuardService]},
  // { path: 'Movement', component: CompanyComponent, canActivate: [AuthGuardService] },
  // { path: 'Scrapp', component: ContainerComponent, canActivate: [AuthGuardService] },
  // { path: '**', component: ErrorComponent },
  // { path: 'favourites', component: FavouritesViewComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

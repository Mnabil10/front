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

const routes: Routes = [
   { path: '', component: DashbordComponent, canActivate: [AuthGuardService] },
   {path: 'report', component:ReportComponent, canActivate: [AuthGuardService]},
   { path: 'repContainer', component: RepcontainerComponent, canActivate: [AuthGuardService] },
   { path: 'repDestination', component: RepDestComponent, canActivate: [AuthGuardService] },
   { path: 'repSource', component: RepSourceComponent, canActivate: [AuthGuardService] },
   { path: 'repUsername', component: RepUserComponent, canActivate: [AuthGuardService] },
   { path: 'repCompany', component: RepcompnyComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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

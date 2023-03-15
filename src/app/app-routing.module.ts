import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CompanyComponent } from './company/company.component';
import { ContainerComponent } from './container/container.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecurityComponent } from './security/security.component';
import { VTTComponent } from './vtt/vtt.component';

const routes: Routes = [
   { path: '', component: SecurityComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'check', component: SecurityComponent, canActivate: [AuthGuardService] },
  { path: 'http', component: VTTComponent, canActivate: [AuthGuardService]},
  { path: 'company', component: CompanyComponent, canActivate: [AuthGuardService] },
  { path: 'container', component: ContainerComponent, canActivate: [AuthGuardService] },
  { path: '**', component: ErrorComponent },
  // { path: 'favourites', component: FavouritesViewComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

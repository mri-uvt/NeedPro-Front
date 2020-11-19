import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminConfigComponent } from './admin/admin-config/admin-config.component';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './user/authentication/authentication.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'home', component: HomeComponent}, 
  { path: 'authentication', component: AuthenticationComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'admin-config', component: AdminConfigComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

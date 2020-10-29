import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { AuthenticationComponent } from './user/authentication/authentication.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path:'not-found', component: FourOhFourComponent},
  { path:'**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

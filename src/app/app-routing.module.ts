import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/usr/login/login.component';
import {RegisterComponent} from './views/usr/register/register.component';
import {ProfileComponent} from './views/usr/profile/profile.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent },
  {path: 'register', component: RegisterComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(appRoutes);

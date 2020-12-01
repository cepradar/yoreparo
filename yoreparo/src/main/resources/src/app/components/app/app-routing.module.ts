import { HomeComponent } from './../../components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegistroComponent } from "../../pages/registro/registro.component";
import { LoginComponent } from '../../pages/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cotizar', component: HomeComponent},
  {path: 'garantia', component: HomeComponent},
  {path: 'ayuda', component: HomeComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

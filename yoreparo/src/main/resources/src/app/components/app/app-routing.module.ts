import { HomeComponent } from './../../components/home/home.component';
import { PantallaCotizarComponent } from './../../components/pantalla-cotizar/pantalla-cotizar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cotizar', component: PantallaCotizarComponent},
  {path: 'garantia', component: HomeComponent},
  {path: 'ayuda', component: HomeComponent},
  {path: 'sesion', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

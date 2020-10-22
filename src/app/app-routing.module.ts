import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasteleriaContactoComponent } from './pasteleria-contacto/pasteleria-contacto.component';
import { PasteleriaComponent } from './pasteleria/pasteleria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'pasteleria',
    pathMatch: 'full'
  },
  {
    path: 'pasteleria',
    component: PasteleriaComponent
  },
  {
    path: 'contacto',
    component: PasteleriaContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

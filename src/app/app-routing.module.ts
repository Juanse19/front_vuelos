import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './components/flight/flight-list/flight-list.component';
import { FlightCreateComponent } from './components/flight/flight-create/flight-create.component';
import { FlightEditComponent } from './components/flight/flight-edit/flight-edit.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './components/seguridad/login/login.component';
import { RegistroComponent } from './components/seguridad/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'flight',
    component: FlightListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'flight/crear',
    component: FlightCreateComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'flight/editar/:id',
    component: FlightEditComponent,
    canActivate: [AdminGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

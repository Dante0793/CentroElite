import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateloginComponent } from './pages/login/createlogin/createlogin.component';
import { UserpanelComponent } from './pages/login/userpanel/userpanel.component';
import { CreateserviceComponent } from './pages/login/createservice/createservice.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'login' , component: LoginComponent},
  { path: 'createlogin' , component: CreateloginComponent},
  { path: 'my', component: UserpanelComponent},
  { path: 'createservice', component: CreateserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

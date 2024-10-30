import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateloginComponent } from './pages/login/createlogin/createlogin.component';
import { UserpanelComponent } from './pages/login/userpanel/userpanel.component';
import { CreateserviceComponent } from './pages/login/createservice/createservice.component';
import { ShowreservesComponent } from './pages/login/showreserves/showreserves.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ReservaComponent,
    ContactoComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    CreateloginComponent,
    UserpanelComponent,
    CreateserviceComponent,
    ShowreservesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

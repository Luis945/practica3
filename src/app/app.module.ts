import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import {PeticionesService} from './servicios/peticiones.service';
import { PrincipalComponent } from './principal/principal.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servicios/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PrincipalComponent,
    FormularioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [PeticionesService,
  {provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

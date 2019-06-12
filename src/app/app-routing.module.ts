import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent },
  {path: 'admin', component: FormularioComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

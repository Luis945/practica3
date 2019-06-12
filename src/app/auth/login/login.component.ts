import { Component, OnInit } from '@angular/core';

import {PeticionesService} from '../../servicios/peticiones.service';
import {Usuario} from '../../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Correo: string;
  Contra: string;
  constructor(private conexion: PeticionesService, private routing: Router) { }

  ngOnInit() {
  }
  async ingresar() {
    const nuevo = new Usuario('', '', this.Correo, this.Contra);
    const valor = this.conexion.verificar(nuevo);
    if (valor) {

    this.routing.navigateByUrl('/');
    }else{
      alert('Correo o contraseña incorecta')
    }
  }
}

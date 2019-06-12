import { Component, OnInit } from '@angular/core';
import {Usuario} from '../clases/usuario';
import {PeticionesService} from '../servicios/peticiones.service';
import { version } from 'punycode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarios = new Array<Usuario>();

  constructor(private ruteo: Router , private conexion: PeticionesService) {
    this.ver();
  }

  ngOnInit() {
  }
  async ver() {
    this.conexion.ver().subscribe(conseguido => {
      this.usuarios = conseguido;
    }, error => {
    });
  }


}

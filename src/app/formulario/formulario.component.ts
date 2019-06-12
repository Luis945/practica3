import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../servicios/peticiones.service';
import {Usuario} from '../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  Usuarios: Array<Usuario>;
  Actual: Usuario;
  constructor(private conexion: PeticionesService, private ruteo: Router) {
    this.conexion.ver().subscribe(obtenidos => {
        this.Usuarios = obtenidos;
    }, err => {

    });
   }

  Nombre: string; Apellido: string; Correo: string; password: string;
  NombreA: string; ApellidoA: string; CorreoA: string;

  ngOnInit() {
  }
  agregar(formulario) {
    const nuevo = new Usuario(
      this.Nombre, this.Apellido, this.Correo, this.password
      );
    this.conexion.agregar(nuevo).subscribe(obtenidos => {
      alert(' Su usuario se ha guardado correctamente');
      this.Usuarios = obtenidos;
      this.Nombre = ''; this.Apellido = ''; this.Correo = ''; this.password = '';
    }, err => {
      alert('no funcionó la conexión');
      console.log(err);
    });
  }
  async eliminar(id) {
    this.conexion.borrar(id).subscribe(conseguido => {
      this.Usuarios = conseguido;
    }, err => {
      alert(' no funcionó la conexión');
      console.log(err);
    });
  }
  obtener(id , Nombre , Apellido, Correo, password) {

    this.Actual =  new Usuario(Nombre, Apellido, Correo, password);
    this.Actual.id = id;

    this.NombreA = this.Actual.Nombre; this.ApellidoA = this.Actual.Apellido; this.CorreoA = this.Actual.Correo;
  }


  async Actualizar() {
    const Nuevo = new Usuario(this.NombreA, this.ApellidoA, this.CorreoA, this.Actual.password);
    Nuevo.id = this.Actual.id;

    this.conexion.actualizar(Nuevo).subscribe(obtenidos => {
      this.Usuarios = obtenidos;
    }, err => {
      alert('No se pudo conectar al server');
    });
  }
}

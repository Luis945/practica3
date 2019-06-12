import { Injectable } from '@angular/core';
import {Usuario} from '../clases/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  constructor(private conexion: HttpClient) {

   }

  uri = 'http://127.0.0.1:3333';

  ver(): Observable<any> {
    const ruta = '/ver';
    return this.conexion.get(this.uri + ruta);
  }
  borrar(id): Observable<any> {
    const ruta = '/borrar/';
    return this.conexion.delete(this.uri + ruta + id);
  }
  agregar(usuario): Observable<any> {
    const ruta = '/nuevo';
    return this.conexion.post(this.uri + ruta , usuario);
  }
  actualizar(usuario): Observable<any> {
    const ruta = '/nuevo/';
    return this.conexion.put(this.uri + ruta, usuario);

  }
  verificar(usuario) {
    const ruta = '/verificar';
    const obtenido = this.conexion.post(this.uri + ruta, usuario);
    obtenido.forEach(valor => {
      localStorage.setItem('token', valor['verificacion']);
      if(valor){
        return true ;

      }
    });
    return false;
  }
  salir() {
    localStorage.removeItem('token');
    return undefined;
  }
}

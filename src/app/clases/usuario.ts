export class Usuario {
  id: number; Nombre: string ; Apellido: string; Correo: string; password: string; Token: string;
  constructor(nombre, appelido, correo, password) {
    this.Nombre = nombre;
    this.Apellido = appelido;
    this.Correo = correo;
    this.password = password;
  }
  verificar(correo, password) {
    this.Correo = correo;
    this.password = password;
  }
}

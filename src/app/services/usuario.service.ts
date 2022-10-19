import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //variable:
  usuarios: any[] = [
    {
      id: 1,
      rut: '11.222.333-4',
      nombre: 'Lalo',
      ap_paterno: 'Cura',
      fecha_nac: '2000-12-24',
      correo: 'administrador@duoc.cl',
      clave: 'administrador',
      tipo_usuario: 'administrador'
    },
    {
      id: 2,
      rut: '18.999.000-1',
      nombre: 'Elvis',
      ap_paterno: 'Tek',
      fecha_nac: '1990-06-10',
      correo: 'alumno@duocuc.cl',
      clave: 'alumno',
      tipo_usuario: 'alumno'
    },
    {
      id: 3,
      rut: '11.122.122-1',
      nombre: 'Profe',
      ap_paterno: 'Sor',
      fecha_nac: '1990-06-18',
      correo: 'prof@profesor.duoc.cl',
      clave: 'profesor',
      tipo_usuario: 'profesor'
    }
  ];

  //VAMOS A CREARr UNA VARIABLE QUE SE ENCARGUE DE SABER SI ESTOY LOGUEADO O NO:
  isAuthenticated = new BehaviorSubject(false);

  constructor(private router: Router) { }

  //métodos:
  addUsuario(usuario) {
    if (this.getUsuario(usuario.rut) == undefined) {
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }

  getUsuario(rut) {
    return this.usuarios.find(usu => usu.rut == rut);
  }

  getUsuarios() {
    return this.usuarios;
  }

  updateUsuario(usuario) {
    let index = this.usuarios.findIndex(usu => usu.rut == usuario.rut);
    this.usuarios[index] = usuario;
  }

  deleteUsuario(rut) {
    this.usuarios.forEach((usu, index) => {
      if (usu.rut == rut) {
        this.usuarios.splice(index, 1);
      }
    });
  }


  //métodos customer:
  loginUsuario(correo, clave) {
    var usuarioLogin: any;
    usuarioLogin = this.usuarios.find(usu => usu.correo == correo && usu.clave == clave);
    if (usuarioLogin != undefined) {
      //PARA CAMBIAR EL VALOR A UN BehaviorSubject SE UTILIZA EL METODO .next(valor);
      this.isAuthenticated.next(true);
      return usuarioLogin;
    }
  }
  getAuth(){
    return this.isAuthenticated.value;
  }
  logout(){
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  validarCorreo(correo){
    return this.usuarios.find(usu => usu.correo == correo);
  }
}

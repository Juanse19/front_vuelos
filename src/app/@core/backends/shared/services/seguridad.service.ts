import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CredencialesUsuarioDTO, RespuestaAutenticacionDTO } from 'src/app/@core/models/seguridad.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private readonly llaveExpiracion = 'token-expiracion';
  private readonly llaveToken = 'token';
  private readonly urlApi = environment.urlApi + 'cuentas';

  constructor(private httpClient: HttpClient) { }

  estaLogueado(){

    const token = localStorage.getItem(this.llaveToken);

    if (!token) {
      return false
    }

    const expiracion = localStorage.getItem(this.llaveExpiracion);
    const expiracionFecha = new Date('expiracion');

    if (expiracionFecha <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  haAutenticado(): boolean {
    const token = localStorage.getItem(this.llaveToken);

    if (!token) {
      return false;
    }

    const expiracion = new Date('localStorage.getItem(this.llaveExpiracion)');

    if (expiracion <= new Date()) {
      this.cerrarSesion();
      return false;
    }

    return true;
  }

  logout() {
    localStorage.removeItem(this.llaveToken),
    localStorage.removeItem(this.llaveToken)
  }

  obtenerRol() {
    return 'Admin';
  }

  cerrarSesion() {
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }

  obtenerCampoJWT(campo: string): string {
    const token = localStorage.getItem(this.llaveToken);
    if (!token) { return ''; }
    var datosJWT = JSON.parse(atob(token.split('.')[1]));
    return datosJWT[campo];
  }

  registrar(credenciales: CredencialesUsuarioDTO): Observable<RespuestaAutenticacionDTO> {
    return this.httpClient.post<RespuestaAutenticacionDTO>(this.urlApi + '/Crear', credenciales)
  }

  login(credenciales: CredencialesUsuarioDTO): Observable<RespuestaAutenticacionDTO> {
    return this.httpClient.post<RespuestaAutenticacionDTO>(this.urlApi + '/login', credenciales)
  }

  guardarToken(RespuestaAutenticacionDTO: RespuestaAutenticacionDTO) {
    localStorage.setItem(this.llaveToken, RespuestaAutenticacionDTO.token);
    localStorage.setItem(this.llaveExpiracion, RespuestaAutenticacionDTO.expiracion.toString());
  }

}

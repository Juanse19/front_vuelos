import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/@core/backends/shared/services/seguridad.service';
import { CredencialesUsuarioDTO } from 'src/app/@core/models/seguridad.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errores: string[] = [];

  constructor(private seguridadService: SeguridadService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(credenciales: CredencialesUsuarioDTO) {

    this.seguridadService.login(credenciales)
    .subscribe(res => {
      this.seguridadService.guardarToken(res);
      this.router.navigate(['/flight']);
    }, errores => this.errores = parsearErroresApi(errores))

  }

}

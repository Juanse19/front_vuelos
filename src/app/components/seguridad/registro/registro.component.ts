import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/@core/backends/shared/services/seguridad.service';
import { CredencialesUsuarioDTO } from 'src/app/@core/models/seguridad.interface';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private seguridadService: SeguridadService,
              private router: Router) { }

  ngOnInit(): void {
  }

  errores: string[]=[];

  registrar(credenciales: CredencialesUsuarioDTO) {
    this.seguridadService.registrar(credenciales)
    .subscribe(res => {

      this.seguridadService.guardarToken(res);
      this.router.navigate(['/'])

    }, errores => this.errores = parsearErroresApi(errores))
  }

}

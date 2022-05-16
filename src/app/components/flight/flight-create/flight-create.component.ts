import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from 'src/app/@core/backends/shared/services/flights.service';
import { FlightCreacionDTO } from '../../../@core/models/flight.interface';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css']
})
export class FlightCreateComponent {

  errores: string[] = [];

  constructor(private flightsService: FlightsService,
              private router: Router) { }



  guardar(flight: FlightCreacionDTO) {
     this.flightsService.crear(flight)
   .subscribe(() =>
   this.router.navigate(['/flight']),
   error => this.errores = parsearErroresApi(error));
  }

}

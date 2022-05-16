import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from 'src/app/@core/backends/shared/services/flights.service';
import { FlightDTO, FlightCreacionDTO } from '../../../@core/models/flight.interface';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  modelo!: FlightDTO;
  errores: string[] = [];

  constructor(private router: Router,
              private flightsService: FlightsService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((parametros) => {
        this.flightsService.obtenerPorId(parametros?.['id'])
        .subscribe(res => {
          this.modelo = res;
          console.log('model', this.modelo);
        }, () => this.router.navigate(['./flight']))
      })
  }

  guardar(flight: FlightCreacionDTO) {
    this.flightsService.editar(this.modelo.id, flight)
    .subscribe(() => {
      this.router.navigate(['/flight'])
    },
    error => this.errores = parsearErroresApi(error));
  }

}

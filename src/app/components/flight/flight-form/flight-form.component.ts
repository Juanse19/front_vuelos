import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AirlinesService } from 'src/app/@core/backends/shared/services/airlines.service';
import { FlightCreacionDTO } from '../../../@core/models/flight.interface';
import { AirlineDTO } from '../../../@core/models/airline.interface';
import { DatePipe } from '@angular/common';
import { FlightsService } from 'src/app/@core/backends/shared/services/flights.service';
import { Router } from '@angular/router';

let FLIGHTCREATE: FlightCreacionDTO;
{

}

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css'],
})
export class FlightFormComponent implements OnInit {

  formFlight!: FormGroup;

  public airline!: AirlineDTO[];

  public checkBox?: boolean;

  @Input()
  errores: string[] = [];

  @Input()
  modelo!: FlightCreacionDTO;

  @Output()
  submit: EventEmitter<FlightCreacionDTO> = new EventEmitter<FlightCreacionDTO>();


  constructor(private formBuilder: FormBuilder,
              private airlinesService: AirlinesService,
              private flightsService: FlightsService,
              private router: Router
              ) {

                this.cargarAirline();
              }

  ngOnInit(): void {

    this.formFlight = this.formBuilder.group({
      cityOrigin: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      cityDestination: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      departureTime: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      arrivalTime: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      flightNumber: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      airlineId: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      status: ['', {validators: [Validators.required, Validators.minLength(3)]}]
    });

    if (this.modelo !== undefined) {

      this.formFlight.patchValue(this.modelo);
    }

  }

  public fields: Object = { text: "airline_name", value: "id" };

  cargarAirline() {
    this.airlinesService.obtenerTodos()
    .subscribe(res => {
      this.airline = res;
    }, error => console.log(error));
  }


  guardar() {

   this.submit.emit(this.formFlight.value);

 }



}

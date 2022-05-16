import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlightDTO, FlightCreacionDTO } from './../../../models/flight.interface';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private urlApi = environment.urlApi + 'flight';

  constructor(private httpClient: HttpClient) { }

  public obtenerTodos() {
    return this.httpClient.get<FlightDTO[]>(`${this.urlApi}/`);
  }

  public obtenerPorId(id: number) {
    return this.httpClient.get<FlightDTO>(`${this.urlApi}/${id}`);
  }

  public crear(flight: FlightCreacionDTO) {
    return this.httpClient.post(this.urlApi, flight);
  }

  public editar(id: number, flight: FlightCreacionDTO) {
    return this.httpClient.put(`${this.urlApi}/${id}`, flight);
  }

  public borrar(id: number) {
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }

}

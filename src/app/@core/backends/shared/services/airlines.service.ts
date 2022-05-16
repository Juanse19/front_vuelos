import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AirlineDTO, AirlineCreacionDTO } from '../../../models/airline.interface';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

  private urlApi = environment.urlApi + 'airlines';

  constructor(private httpClient: HttpClient) { }

  public obtenerTodos() {
    return this.httpClient.get<AirlineDTO[]>(`${this.urlApi}/`);
  }

  public obtenerPorId(id: number) {
    return this.httpClient.get<AirlineDTO>(`${this.urlApi}/${id}`);
  }

  public crear(airline: AirlineCreacionDTO) {
    return this.httpClient.post(this.urlApi, airline);
  }

  public editar(id: number, airline: AirlineCreacionDTO) {
    return this.httpClient.put(`${this.urlApi}/${id}`, airline);
  }

  public borrar(id: number) {
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }

}

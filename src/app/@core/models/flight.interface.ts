export interface FlightDTO {
  id: number,
  cityOrigin?: string,
  cityDestination?: string,
  departureTime: string,
  arrivalTime: string,
  flightNumber?: string,
  airlineId?: number,
  status?: boolean,
}

export interface FlightCreacionDTO {
  cityOrigin?: string,
  cityDestination?: string,
  departureTime?: string,
  arrivalTime?: string,
  flightNumber?: string,
  airlineId?: number,
  status?: boolean,
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { FlightsService } from 'src/app/@core/backends/shared/services/flights.service';
import { FlightDTO } from 'src/app/@core/models/flight.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public flights!: FlightDTO[];

  @ViewChild('gantt')
    public ganttObj!: GanttComponent;
    public data!: object[];
    public taskSettings!: object;
    public columns!: object[];
    public timelineSettings!: object;
    public timezoneValue: string = 'UTC';
    public dayWorkingTime!: object[];
    public editSettings!: object;
    public splitterSettings!: object;
    public labelSettings!: object;

    constructor(private fligthService: FlightsService,) {

     }


    public ngOnInit(): void {
      this.cargarFlight()
      this.data = [];


        console.log('data', this.data);

      //   this.editSettings = {
      //     allowAdding: true,
      //     allowEditing: true,
      //     allowDeleting: true,
      //     allowTaskbarEditing: true,
      //     showDeleteConfirmDialog: true
      // };

        this.taskSettings = {
            id: 'id',
            name: 'flightNumber',
            startDate: 'departureTime',
            endDate: "arrivalTime",
            duration: 'duration',
            progress: 'progress',
            dependency: 'predecessor',
            child: "Children",
        };

        this.columns = [
          { field: "id", visible: false },
          { field: "flightNumber", headerText: "Vuelo", width: "100" },
          { field: "cityOrigin", headerText: "Origen", width: "90" },
          { field: "cityDestination", headerText: "Destino", width: "100" },
          { field: "departureTime", headerText: "Hola salida", width: "155", format: { format: 'dd-MM-yyyy HH:mm', type: 'date'} },
          { field: "arrivalTime", headerText: "Hora llegada", width: "155", format: { format: 'dd-MM-yyyy HH:mm', type: 'date'} },
        ];

        // this.splitterSettings = {
        //   position: "40%",
        // }
      //   this.splitterSettings = {
      //     columnIndex: 3
      // };

        this.labelSettings = {
            leftLabel: 'taskName',
        };

        this.timelineSettings = {
            timelineUnitSize: 65,
            topTier: {
                unit: 'Day',
                format: "MMM, dd, yyyy, HH, mm",
            },
            bottomTier: {
                unit: 'Hour',
                format: 'HH:mm a'
            }
        };
        this.dayWorkingTime = [{ from: 0, to: 24 }];
    }

    cargarFlight() {
      this.fligthService.obtenerTodos()
      .subscribe(res => {


        this.flights = res;

      }, error => console.log(error));
    }


}

import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FlightsService } from '../../../@core/backends/shared/services/flights.service';
import { FlightDTO } from '../../../@core/models/flight.interface';
import { EditService, SortService, ToolbarService, PageService, NewRowPosition, FilterSettingsModel,
  ToolbarItems, CommandModel, CommandColumnService } from '@syncfusion/ej2-angular-grids';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  providers: [ToolbarService, EditService, PageService, SortService, CommandColumnService],
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  public flights!: FlightDTO[];

  private alive = true;
    public editSettings?: Object;
    public toolbar?: ToolbarItems[] | object;
    public editparams?: Object;
    public pageSettings?: Object;
    public filterOptions?: FilterSettingsModel;
    public commands?: CommandModel[];

  constructor(private fligthService: FlightsService,
              private router: Router) { }

  ngOnInit(): void {
    this.cargarFlight();

    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
      allowEditOnDblClick: false
    };

    this.pageSettings = {
      pageSizes: true,
      pageSize: 10 };
    this.filterOptions = {
      type: 'Menu',
   };

   this.commands = [
    {
      type: 'Edit',
      buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' }
    },
    {
      type: 'Delete',
      buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }
    }
  ];

  }

  actionBegin(args: any) {
    if (args.requestType == 'beginEdit') {

      args.cancel = true;
      this.router.navigate([`flight/editar/${args.rowData.id}`]);

    }

    if (( args.requestType === 'delete')) {

      Swal.fire({
        title: '¿Estás seguro que quieres eliminar el Vuelo?',
        text: `¡Se eliminará el vuelo!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, Eliminar!'
      }).then(result => {
        // debugger
        if (result.value) {

          this.fligthService.borrar(args.data[0].id)
          .subscribe(res => {

            this.cargarFlight();

          }, error => console.log(error));

          Swal.fire('¡Se Eliminó Exitosamente', 'success');


        }


       });
      args.cancel = true;
    }

  }

  cargarFlight() {
    this.fligthService.obtenerTodos()
    .subscribe(res => {

      this.flights = res;

    }, error => console.log(error));
  }

  ngOnDestroy() {
    this.alive = false;
  }

}

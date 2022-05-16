import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirlineListComponent } from './components/airlines/airline-list/airline-list.component';
import { AirlineEditComponent } from './components/airlines/airline-edit/airline-edit.component';
import { AirlineFormComponent } from './components/airlines/airline-form/airline-form.component';
import { AirlineCreateComponent } from './components/airlines/airline-create/airline-create.component';
import { FlightListComponent } from './components/flight/flight-list/flight-list.component';
import { FlightEditComponent } from './components/flight/flight-edit/flight-edit.component';
import { FlightFormComponent } from './components/flight/flight-form/flight-form.component';
import { FlightCreateComponent } from './components/flight/flight-create/flight-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './components/menu/menu.component';

import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { AutorizadoComponent } from './components/seguridad/autorizado/autorizado.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { LoginComponent } from './components/seguridad/login/login.component';
import { RegistroComponent } from './components/seguridad/registro/registro.component';
import { AuthenticationFormComponent } from './components/seguridad/authentication-form/authentication-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AirlineListComponent,
    AirlineEditComponent,
    AirlineFormComponent,
    AirlineCreateComponent,
    FlightListComponent,
    FlightEditComponent,
    FlightFormComponent,
    FlightCreateComponent,
    MenuComponent,
    MostrarErroresComponent,
    AutorizadoComponent,
    LandingPageComponent,
    LoginComponent,
    RegistroComponent,
    AuthenticationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridModule,
    DropDownListAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    DateTimePickerModule,
    GanttAllModule,
  ],
  providers: [PageService, SortService, FilterService, GroupService, FilterService, SortService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

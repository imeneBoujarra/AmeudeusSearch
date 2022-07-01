import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FormsModule } from '@angular/forms';
import { AngularPaginatorModule } from 'angular-paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularPaginatorModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

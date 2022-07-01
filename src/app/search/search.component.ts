import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { SearchFlightService } from '../search-flight.service';
import { FlightData } from './FlightData';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {




 originValue !:string; 
 destinationValue !:string ;
 dateDepart !: string ;
 flightsList !: Array<Array<string>>; 
 dataSource !: any ; 
 page = 1;
 pageSize =10 ;
 length =70 ;
 displayedColumns: string[] = ['Depature', 'Arrival', 'Price', 'Class'];
 etat=true ;
 sortDir = 1;//1= 'ASE' -1= DSC

  constructor(private flightService :SearchFlightService) { }

  ngOnInit(): void {
   
    console.log(this.destinationValue+':'+this.dateDepart+':'+this.originValue);
  }


public searchFlight()
{

console.log(this.destinationValue+':'+this.dateDepart+':'+this.originValue);

this.flightService.getFlights(this.destinationValue,this.originValue,this.dateDepart).subscribe(data=>{ this.flightsList=data ;
   console.log(data); 
  this.etat =false });

}




}
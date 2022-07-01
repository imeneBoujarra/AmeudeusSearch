import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import { catchError, Observable  , tap} from 'rxjs';
import { FlightData } from './search/FlightData';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {
  url='https://devoxx2021-redhat-amadeus-contest-api.comwork.io/v1/amadeus?as_array=true'

  constructor(private http : HttpClient) { }

  getFlights(destination : string , origin : string , date :string) :Observable<any>{

    let queryParams = new HttpParams();
    queryParams = queryParams.append('departure_date', date);
    queryParams = queryParams.append('origin', origin);
    queryParams = queryParams.append ('destination' , destination);
    
    //console.log('Headers Value = ' + queryParams.toString);
    
    return this.http.get(this.url , {params:queryParams}).pipe(tap(data => console.log('All: ' + JSON.stringify(data)))
    );
   
  }


}

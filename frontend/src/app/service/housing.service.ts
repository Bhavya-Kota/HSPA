import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iproperty } from '../property/property-list/IProperty.Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:number): Observable<Iproperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data=>
        {
          const propertiesArray: Array<Iproperty>=[];
          for(const i in data)
          {
            if(data.hasOwnProperty(i) && data[i].SellRent === SellRent)
            {
              propertiesArray.push(data[i] );
            }
          }
          return propertiesArray;
        })
    );

  }
    
  
}

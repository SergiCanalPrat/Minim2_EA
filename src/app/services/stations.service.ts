import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stations } from "../models/stations";
import { Environments } from "./environments"
import { Observable } from "rxjs";
import { Bikes } from "../models/bikes";

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  environment: Environments;
  selectedBikes: Stations; 

  constructor( private http: HttpClient) { 
    //this.selectedBikes = new Stations("","","");
    this.environment = new Environments();
  } 
  //lista de stations
  getStations() :Observable<Stations[]> {
    return this.http.get<Stations[]>(this.environment.urlStations + "/list");
  }

  addBike(stationId: string, bikeId: string, station: Object, bike: Object) {
    return this.http.post(this.environment.urlRelacion + "/add" +  `/${stationId}` + `/${bikeId}` , station , bike);
  }
  /*
 assignBike(stationId, bikeId) {
    return this.http.get(this.environment.url + "assignBike/"+stationId+"/"+bikeId, {observe: 'response'})
  }
  */

  deleteBike(stationId: string, bikeId: string) {
    return this.http.delete(this.environment.urlRelacion +"/delete"+ `/${stationId}` + `/${bikeId}`);  
  }

}

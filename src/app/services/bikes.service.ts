import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Bikes } from "../models/bikes";
import { Environments } from "./environments";
import {Observable} from "rxjs";
import { Stations } from '../models/stations';


@Injectable({
  providedIn: 'root'
})
export class BikesService {  
  environment: Environments;
  selectedBikes: Bikes; 

  constructor( private http: HttpClient) {
    this.selectedBikes = new Bikes("","","","");
    this.environment = new Environments();
   }
   

  //Me devuelve una lista de las bicis que estan en mi estacion
  listBikes():Observable<Bikes[]> {
    return this.http.get<Bikes[]>(this.environment.urlBikes + "/list")
  }
   //lista de las Bicis de la estacion
  listAdd(id: string):Observable<Stations>{
    return this.http.get<Stations>(this.environment.urlStations + "/add" + `/${id}`)
  }
  //lista de las bicis que no pertenecen a la estacion
  listnoAdd(id: string):Observable<Bikes> {
    return this.http.get<Bikes>(this.environment.urlStations + "/noadd" + `/${id}`)
  }
  //Detalle de una bici
  getBikeId(id: string):Observable<Bikes> {
    return this.http.get<Bikes>(this.environment.urlBikes +`/${id}`)
  }
  //añadir bici a lista
  addBike(stationId: string, bikeId: string){
    return this.http.post(this.environment.urlRelacion + "/add" , + { stationId} + "/" + {bikeId} )
  }
  //eliminar la bici de la lista de bicis de una estacion
  deleteBike(stationId: string, bikeId: string){
    return this.http.delete(this.environment.urlRelacion + "/delete" + { stationId} + "/" + {bikeId})
  }
   
}

 
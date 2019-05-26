import { Component, OnInit } from '@angular/core';import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";

import { StationsService } from '../../services/stations.service';
import { BikesService } from '../../services/bikes.service';
import { Stations } from '../../models/stations';
import { Bikes } from '../../models/bikes';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  constructor(private stationService: StationsService, private router: Router) { }
  stations: Stations[]; 
 
  
  ngOnInit() {
      this.listStations();
    }
  //se ve la lista de stations nada mas empezar
  listStations(){
    this.stationService.getStations().subscribe(res => {
      this.stations = res
      console.log("lista de stations:   " + this.stations.length + this.stations)
    });
  }

}

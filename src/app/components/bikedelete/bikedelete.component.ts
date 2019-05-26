import { Component, OnInit } from '@angular/core';import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import { StationsService } from '../../services/stations.service';
import { BikesService } from '../../services/bikes.service';
import { Stations } from '../../models/stations';
import { Bikes } from '../../models/bikes';

@Component({
  selector: 'app-deleteBike',
  templateUrl: './deleteBike.component.html',
  styleUrls: ['./deleteBike.component.scss']
})
export class BikedeleteComponent implements OnInit { 
  //bike: Bikes[];
  
  constructor(private activatedRouter: ActivatedRoute, private bikeService: BikesService, private stationService: StationsService) { }
  station = new Stations;
  bike =  Array(); 

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.station._id = params['id'];
    });
   this.listAdd(this.station._id)
   console.log("id del station " + this.station._id)
  }
  listAdd(id: string){
    this.bikeService.listAdd(id).subscribe(res => {
      this.station.bikes =res.bikes;
      this.bike = this.station.bikes; //lista de las bicis 
      console.log("detalle del station   " + this.bike)
      //Añadir funcion para que asodias el id de la bici con su info getBike
      
    })
  }
  deleteBike(bikeId: string){    
    this.stationService.deleteBike(this.station._id, bikeId).subscribe(res =>{
      console.log("Del station   " +this.station._id +"   elimino la bici " +bikeId);
      console.log(res);
    })
  }

}

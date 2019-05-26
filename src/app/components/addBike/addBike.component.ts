import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import { StationsService } from '../../services/stations.service';
import { BikesService } from '../../services/bikes.service';
import { Stations } from '../../models/stations';
import { Bikes } from '../../models/bikes';

@Component({
  selector: 'app-addBike',
  templateUrl: './addBike.component.html',
  styleUrls: ['./addBike.component.scss']
})
export class AddBikeComponent implements OnInit {
  stations: Stations;
  bike: Bikes[];
  stationObject: Object;
  bikeObject: Object;

  constructor( private activatedRouter: ActivatedRoute, private bikeService: BikesService, private stationService: StationsService) { }
  station = new Stations;

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.station._id = params['id'];
      });
      this.listBikes()
      console.log("id del station " + this.station._id)
  }

  listBikes(){
    this.bikeService.listBikes().subscribe(res => {
      //this.station.bikes =res.bikes;
      this.bike =res;
      console.log("detalle del station " + this.bike)
      console.log(this.station._id)
     })  
  }

  addBike(bikeId: string){    
    console.log("Añado en el station " +this.station._id +"   la bici   " +bikeId);
    this.stationObject = this.station._id;
    this.bikeObject =  bikeId;
    this.stationService.addBike(this.station._id, bikeId, this.stationObject, this.bikeObject).subscribe(res =>{     
      console.log(res);
    })
  }
}

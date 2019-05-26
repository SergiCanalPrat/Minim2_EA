import { Bikes } from './bikes';
import { Identifiers } from '@angular/compiler';

export class Stations {
    _id: string;
    station: string;
    state: String;
    description: String;
    bikes: Array<string>;

    constructor(_id='', station ='', state ='', description ="", bikes = [""]){
        this._id = _id;
        this.station = station;
        this.state = state;
        this.description = description;
        this.bikes = bikes; 
    }
}